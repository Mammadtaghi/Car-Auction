import axios from "axios";
import React from 'react';
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../Context/userContext';
import style from './index.module.scss';

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

                    <div className={style.productBox}>
                        <div className={style.imgBox}>
                            <img src={isLoading ? "" : Prod.image.url} alt="" />
                        </div>
                        <div className={style.textBox}>
                            <p className={style.currentBidBox}>
                                <span className={style.text}>{isLoading ? '' : Prod.maxBid ? 'Current Bid:' : 'Opening Bid:'}</span>
                                <span className={style.currentBid}>{isLoading ? '' : Prod.maxBid ? Prod.maxBid : Prod.openingBid}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage