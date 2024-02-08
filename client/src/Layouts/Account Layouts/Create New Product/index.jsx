import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../../Context/userContext';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreateNewProduct() {

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    async function CreateNewProduct(values) {

        values.username = user.username

        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:4728/product/',
                data: values,
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(response.data);
            setMessage(response.data.message)
        } catch (error) {
            console.log(error);
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>CreateNewProduct</title>
            </Helmet>
            <div id={style.CreateNewProduct}>
                <div className={style.container}>
                    <Formik
                        initialValues={{ title: '', image: '', info: '', openingBid: '', minBid: '', minStep: '' }}
                        validationSchema={Yup.object({
                            title: Yup.string()
                                .max(20, 'Must be less than 20 characters!')
                                .required('Required'),
                            image: Yup.string()
                                .required('Required'),
                            info: Yup.string()
                                .required('Required'),
                            openingBid: Yup.number()
                                .min(1, 'Do you want to sell or donate?!')
                                .required('Required'),
                            minBid: Yup.number()
                                .min(2, 'Do you really want to sell something ?!')
                                .required('Required'),
                            minStep: Yup.number()
                                .min(1, 'This is minimum rise for auction product!')
                                .required('Required'),
                            startTime: Yup.date()
                                .required('Required'),
                            endTime: Yup.date()
                                .required('Required'),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            CreateNewProduct(values)
                            // resetForm()
                        }}
                    >
                        <Form className={`${style.formik}`}>
                            <label htmlFor="title">Title</label>
                            <Field className={style.input} name="title" type="text" />
                            <div className={style.error}><ErrorMessage name="title" /></div>

                            <label htmlFor="image">Image</label>
                            <Field className={style.input} name="image" type="text" />
                            <div className={style.error}><ErrorMessage name="image" /></div>

                            <label htmlFor="info">Info</label>
                            <Field className={style.input} name="info" type="text" />
                            <div className={style.error}><ErrorMessage name="info" /></div>

                            <label htmlFor="openingBid">Opening Bid</label>
                            <Field className={style.input} name="openingBid" type="text" />
                            <div className={style.error}><ErrorMessage name="openingBid" /></div>

                            <label htmlFor="minBid">Your Target Profit</label>
                            <Field className={style.input} name="minBid" type="text" />
                            <div className={style.error}><ErrorMessage name="minBid" /></div>

                            <label htmlFor="minStep">Min Bid Step</label>
                            <Field className={style.input} name="minStep" type="text" />
                            <div className={style.error}><ErrorMessage name="minStep" /></div>

                            <label htmlFor="startTime">Start Time</label>
                            <Field className={style.input} name="startTime" type="datetime-local" />
                            <div className={style.error}><ErrorMessage name="startTime" /></div>

                            <label htmlFor="endTime">End Time</label>
                            <Field className={style.input} name="endTime" type="datetime-local" />
                            <div className={style.error}><ErrorMessage name="endTime" /></div>

                            <button className={`Button`} type="submit">Create</button>
                        </Form>
                    </Formik>
                    <p className={style.message}>{message}</p>
                </div>
            </div>
        </>
    )
}

export default CreateNewProduct