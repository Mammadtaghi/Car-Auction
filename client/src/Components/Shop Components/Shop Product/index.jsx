import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useProduct } from '../../../Context/productContext';
import { useUser } from '../../../Context/userContext';
import style from "./index.module.scss";
import { useNavigate } from 'react-router-dom';

function ShopProduct({ item }) {

    const navigate = useNavigate()

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    const { Products, setProducts, isLoading, GetProducts } = useProduct()

    async function PlaceBid(values) {
        try {
            const response = await axios.put(`http://localhost:4728/product/update-max-bid/${item._id}`, values, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(response);
            setMessage(response.data.message)
            GetProducts()
        } catch (error) {
            console.log(error);
            setMessage(error.response.data.message)
        }
    }

    return (
        <div id={style.ShopProduct}>
            <div className={style.imgBox}>
                <img src={item.image.url} alt="" />
                <div className={style.placeBidBox}>
                    {(Date.now() > new Date(item.startTime).getTime()) && (Date.now() < new Date(item.endTime).getTime()) ? <Formik
                        initialValues={{ bid: '' }}
                        validationSchema={Yup.object({
                            bid: Yup.number()
                        })}
                        onSubmit={(values, { resetForm }) => {
                            PlaceBid(values)
                            resetForm()
                        }}
                    >
                        <Form className={style.inputBox}>
                            <Field className={`${style.bid}`} name="bid" step={item.minStep} min={item.maxBid ? (item.maxBid + item.minStep) : (item.openingBid + item.minStep)} type="number" />
                            <ErrorMessage name="bid" />

                            <button className={`${style.bidBtn}`} type="submit">Bid</button>
                        </Form>
                    </Formik>
                        : null}
                    <div className={`${style.iconHolder}`}>
                        {(Date.now() < new Date(item.startTime).getTime()) ? <div className={style.iconBox}>
                            <i className={`fa-regular fa-heart ${style.icon}`}></i>
                        </div> : null}
                        <div className={style.iconBox} onClick={()=>navigate(`/detail/${item._id}`)}>
                            <i className={`fa-regular fa-eye ${style.icon}`}></i>
                        </div>
                    </div>
                    {message ? <p className={style.message}>{message}</p> : null}
                </div>
            </div>
            <div className={style.textBox}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.infoBox}>
                    <span data={'Year'} className={`${style.year} ${style.info}`}>{item.info.year}</span>
                    &sdot;
                    <span data={'Body Type'} className={`${style.body} ${style.info}`}>{item.info.body}</span>
                    &sdot;
                    <span style={{ color: `${item.info.color}` }} data={'Color'} className={`${style.color} ${style.info}`}>{item.info.color}</span>
                    &sdot;
                    <span data={'Condition'} className={`${style.condition} ${style.info}`}>{item.info.condition}</span>
                </p>
                <p className={style.currentBidBox}><span className={style.text}>{!item.maxBid ? 'Opening Bid:' : 'Current Bid:'}</span> <span className={style.currentBid}>{item.maxBid ? item.maxBid : item.openingBid} $</span></p>
                {item.maxBid ? <p className={style.maxBidOfferBox}><span className={style.text}>{(Date.now() > new Date(item.endTime).getTime()) ? 'Winner:' : 'Max Bid Offer:'}</span> <span className={style.bidOffer}>{item.maxBidOffer.username}</span></p> : null}
                <p className={style.auctioneerBox}><span className={style.text}>Auctioneer:</span> <span className={style.auctioneer}>{item.Auctioneer.username}</span></p>
                <div className={style.timeBox}>{
                    (Date.now() < new Date(item.startTime).getTime())
                        ?
                        <>
                            <span data={'Days'} className={`${style.days} ${style.time}`}>{item.remainingTimeToStart.days}</span>
                            <span className={`${style.timeSeperator}`}>:</span>
                            <span data={'Hours'} className={`${style.hours} ${style.time}`}>{item.remainingTimeToStart.hours}</span>
                            <span className={`${style.timeSeperator}`}>:</span>
                            <span data={'Minutes'} className={`${style.minutes} ${style.time}`}>{item.remainingTimeToStart.minutes}</span>
                            <span className={`${style.timeSeperator}`}>:</span>
                            <span data={'Seconds'} className={`${style.seconds} ${style.time}`}>{item.remainingTimeToStart.seconds}</span>
                            <span className={style.to}>To Start</span>
                        </>
                        :
                        (Date.now() < new Date(item.endTime).getTime())
                            ?
                            <>
                                <span data={'Days'} className={`${style.days} ${style.time}`}>{item.remainingTimeToEnd.days}</span>
                                <span className={`${style.timeSeperator}`}>:</span>
                                <span data={'Hours'} className={`${style.hours} ${style.time}`}>{item.remainingTimeToEnd.hours}</span>
                                <span className={`${style.timeSeperator}`}>:</span>
                                <span data={'Minutes'} className={`${style.minutes} ${style.time}`}>{item.remainingTimeToEnd.minutes}</span>
                                <span className={`${style.timeSeperator}`}>:</span>
                                <span data={'Seconds'} className={`${style.seconds} ${style.time}`}>{item.remainingTimeToEnd.seconds}</span>
                                <span className={style.to}>To End</span>
                            </>
                            :
                            <span className={`${style.ended}`}>Auction Closed</span>
                }</div>
            </div>
        </div>
    )
}

export default ShopProduct