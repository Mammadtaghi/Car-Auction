import React from 'react';
import style from './index.module.scss';
import { Helmet } from "react-helmet-async";
import { useUser } from '../../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyProduct from '../../../Components/Common Components/MyProduct';

function MyProducts() {

    const navigate = useNavigate();

    const { user, setUser, Logout } = useUser();

    const [data, setData] = React.useState([]);

    async function GetVending(id) {
        try {
            const response = await axios.get(`http://localhost:4728/user/${id}`);
            console.log(response.data.vending);
            const vendingData = response.data.vending.map(item => ({
                ...item,
                remainingTimeToEnd: formatTime((Date.now() - new Date(item.endTime).getTime())),
                remainingTimeToStart: formatTime((Date.now() - new Date(item.startTime).getTime())),
            }));
            setData(vendingData);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        GetVending(user.id);

        const intervalId = setInterval(() => {
            setData(prevData => {
                return prevData.map(item => ({
                    ...item,
                    remainingTimeToEnd: formatTime(Math.abs(Date.now() - new Date(item.endTime).getTime())),
                    remainingTimeToStart: formatTime(Math.abs(Date.now() - new Date(item.startTime).getTime())),
                }));
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Function to format remaining time
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
            </Helmet>
            <div id={style.MyProducts}>
                <div className={style.container}>
                    {data && data.map(item => (
                        <div key={item._id} className={style}><MyProduct item={item} /></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyProducts;