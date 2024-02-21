import axios from "axios";
import React from 'react';
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../Context/userContext';
import style from './index.module.scss';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function DetailPage() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [Prod, setProd] = React.useState(null)

    const [isLoading, setIsLoading] = React.useState(true)

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    async function GetCar() {
        try {
            const response = await axios.get(`http://localhost:4728/product/${id}`)
            console.log(response.data);
            const productData = {
                ...response.data,
                remainingTimeToEnd: formatTime((Date.now() - new Date(response.data.endTime).getTime())),
                remainingTimeToStart: formatTime((Date.now() - new Date(response.data.startTime).getTime())),
            }
            setProd(productData)
            setIsLoading(false)
            console.log(productData);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        GetCar()

        const intervalId = setInterval(() => {
            setProd(prevData => {
                return {
                    ...prevData,
                    remainingTimeToEnd: formatTime(Math.abs(Date.now() - new Date(prevData.endTime).getTime())),
                    remainingTimeToStart: formatTime(Math.abs(Date.now() - new Date(prevData.startTime).getTime())),
                };
            });
        }, 1000);
        console.log(Prod);
        return () => clearInterval(intervalId);
    }, [])
   

    function formatTime(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    async function PlaceBid(values) {
        try {
            const response = await axios.put(`http://localhost:4728/product/update-max-bid/${Prod._id}`, values, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(response);
            setMessage(response.data.message)
            GetCar()
        } catch (error) {
            console.log(error);
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>DetailPage</title>
            </Helmet>
            <div id={style.DetailPage}>
                <div className={style.container}>
                    <div className={style.pageTitle}>
                        <h1 className={style.carName}>Car: {isLoading ? 'Loading...' : Prod.title}</h1>
                        <p className={style.path}>
                            <span>{isLoading ? 'Loading...' : Prod.info.year}</span>
                            &sdot;
                            <span>{isLoading ? 'Loading...' : Prod.info.model}</span>
                            &sdot;
                            <span>{isLoading ? 'Loading...' : Prod.info.color}</span>
                            &sdot;
                            <span>{isLoading ? 'Loading...' : Prod.info.condition}</span>
                        </p>
                    </div>
                    {/* --------------Product--------------  */}
                    <div className={style.productBox}>
                        <div className={style.imgBox}>
                            <img src={isLoading ? "" : Prod.image.url} alt="" />
                        </div>
                        <div className={style.textBox}>
                            <h1 className={style.title}>{isLoading ? '' : Prod.title}</h1>
                            <p className={style.currentBidBox}>
                                <span className={style.text}>{isLoading ? '' : Prod.maxBid ? 'Current Bid:' : 'Opening Bid:'}</span>
                                <span className={style.currentBid}>{isLoading ? '' : Prod.maxBid ? Prod.maxBid : Prod.openingBid}</span>
                            </p>
                            <p className={style.userBidBox}>
                                <span className={style.text}>{isLoading ? '' : Prod.maxBidOffer ? 'Hammer Price:' : null}</span>
                                <span className={style.user}>{isLoading ? '' : Prod.maxBidOffer ? Prod.maxBidOffer.username : null}</span>
                            </p>
                            <p className={style.userBidBox}>
                                <span className={style.text}>{'Auctioneer:'}</span>
                                <span className={style.user}>{isLoading ? '' : Prod.Auctioneer.username}</span>
                            </p>
                            <p className={style.timeBox}>{
                                isLoading ? 'Loading...' :
                                    (Date.now() < new Date(Prod.startTime).getTime())
                                        ?
                                        <>
                                            <span data={Prod.remainingTimeToStart.days === 1 ? 'Day' : 'Days'} className={`${style.days} ${style.time}`}>{Prod.remainingTimeToStart.days}</span>
                                            <span className={`${style.timeSeperator}`}>:</span>
                                            <span data={Prod.remainingTimeToStart.hours === 1 ? 'Hour' : 'Hours'} className={`${style.hours} ${style.time}`}>{Prod.remainingTimeToStart.hours}</span>
                                            <span className={`${style.timeSeperator}`}>:</span>
                                            <span data={Prod.remainingTimeToStart.minutes === 1 ? 'Minute' : 'Minutes'} className={`${style.minutes} ${style.time}`}>{Prod.remainingTimeToStart.minutes}</span>
                                            <span className={`${style.timeSeperator}`}>:</span>
                                            <span data={Prod.remainingTimeToStart.seconds === 1 ? 'Second' : 'Seconds'} className={`${style.seconds} ${style.time}`}>{Prod.remainingTimeToStart.seconds}</span>
                                            <span className={style.to}>To Start</span>
                                        </>
                                        :
                                        (Date.now() < new Date(Prod.endTime).getTime())
                                            ?
                                            <>
                                                <span data={'Days'} className={`${style.days} ${style.time}`}>{Prod.remainingTimeToEnd.days}</span>
                                                <span className={`${style.timeSeperator}`}>:</span>
                                                <span data={'Hours'} className={`${style.hours} ${style.time}`}>{Prod.remainingTimeToEnd.hours}</span>
                                                <span className={`${style.timeSeperator}`}>:</span>
                                                <span data={'Minutes'} className={`${style.minutes} ${style.time}`}>{Prod.remainingTimeToEnd.minutes}</span>
                                                <span className={`${style.timeSeperator}`}>:</span>
                                                <span data={'Seconds'} className={`${style.seconds} ${style.time}`}>{Prod.remainingTimeToEnd.seconds}</span>
                                                <span className={style.to}>To End</span>
                                            </>
                                            :
                                            <span className={`${style.ended}`}>Auction Closed</span>
                            }</p>

                            <div className={style.bidBox}>
                                {isLoading ? '' : (Date.now() > new Date(Prod.startTime).getTime()) && (Date.now() < new Date(Prod.endTime).getTime()) ?
                                    <Formik
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
                                            <Field className={`${style.bidInp}`} name="bid" step={Prod.minStep} min={Prod.maxBid ? (Prod.maxBid + Prod.minStep) : (Prod.openingBid + Prod.minStep)} type="number" />
                                            <ErrorMessage name="bid" />

                                            <button className={`${style.bidBtn}`} type="submit">Bid</button>
                                        </Form>
                                    </Formik>
                                    : null}
                            </div>
                            <p className={style.message}>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage