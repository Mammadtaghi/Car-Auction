import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../../Context/userContext';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useProduct } from '../../../Context/productContext';

function CreateNewProduct() {

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    const { Products, setProducts, isLoading, GetProducts } = useProduct()

    async function CreateNewProduct(values, resetForm) {

        const info = {
            model: values.model,
            body: values.body,
            year: values.year,
            color: values.color,
            condition: values.condition,
        }

        values.info = info

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
            GetProducts()
            resetForm()
            setTimeout(() => {
                setMessage('')
            }, 4000);
        } catch (error) {
            console.log(error);
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Helmet>
            <div id={style.CreateNewProduct}>
                <div className={style.container}>
                    <Formik
                        initialValues={{ title: '', image: '', model: '', year: '', body: '', color: '', condition: '', openingBid: '', minBid: '', minStep: '', startTime: '', endTime: '' }}
                        validationSchema={Yup.object({
                            title: Yup.string()
                                .max(20, 'Must be less than 20 characters!')
                                .required('Required'),
                            image: Yup.string()
                                .required('Required'),
                            model: Yup.string()
                                .required('Required'),
                            year: Yup.number()
                                .min(1970, "You can't sell old cars!")
                                .max(new Date(Date.now()).getFullYear(), "I don't think you can travel in time!")
                                .required('Required'),
                            body: Yup.string()
                                .required('Required'),
                            color: Yup.string()
                                .required('Required'),
                            condition: Yup.string()
                                .required('Required'),
                            openingBid: Yup.number()
                                .min(1, 'Do you want to sell or donate?!')
                                .required('Required'),
                            minBid: Yup.number()
                                .min(1, 'Do you really want to sell something ?!')
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
                            CreateNewProduct(values, resetForm)
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

                            <label htmlFor="model">Model</label>
                            <Field className={style.input} name="model" type="text" />
                            <div className={style.error}><ErrorMessage name="model" /></div>

                            <label htmlFor="year">Year</label>
                            <Field className={style.input} name="year" type="text" />
                            <div className={style.error}><ErrorMessage name="year" /></div>


                            {/* // Body Type */}

                            <label htmlFor="body">Body Type</label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Sedan" />
                                <span className={style.text}>Sedan</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Sports" />
                                <span className={style.text}>Sports</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="SUV" />
                                <span className={style.text}>SUV</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Convertible" />
                                <span className={style.text}>Convertible</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Compact" />
                                <span className={style.text}>Compact</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Pickup" />
                                <span className={style.text}>Pickup</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Electric" />
                                <span className={style.text}>Electric</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="body">
                                <Field className={style.input} name="body" type="radio" value="Crossover" />
                                <span className={style.text}>Crossover</span>
                            </label>
                            <div className={style.error}><ErrorMessage name="body" /></div>


                            {/* // Color */}

                            <label htmlFor="color">Color</label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Black" />
                                <span className={style.text}>Black</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="White" />
                                <span className={style.text}>White</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Gray" />
                                <span className={style.text}>Gray</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Blue" />
                                <span className={style.text}>Blue</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Cyan" />
                                <span className={style.text}>Cyan</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Red" />
                                <span className={style.text}>Red</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Green" />
                                <span className={style.text}>Green</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Yellow" />
                                <span className={style.text}>Yellow</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Purple" />
                                <span className={style.text}>Purple</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Orange" />
                                <span className={style.text}>Orange</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="color">
                                <Field className={style.input} name="color" type="radio" value="Pink" />
                                <span className={style.text}>Pink</span>
                            </label>
                            <div className={style.error}><ErrorMessage name="color" /></div>


                            {/* // Condition */}

                            <label htmlFor="condition">Condition</label>
                            <label className={style.radioLabel} htmlFor="condition">
                                <Field className={style.input} name="condition" type="radio" value="Excellent" />
                                <span className={style.text}>Excellent</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="condition">
                                <Field className={style.input} name="condition" type="radio" value="Good" />
                                <span className={style.text}>Good</span>
                            </label>
                            <label className={style.radioLabel} htmlFor="condition">
                                <Field className={style.input} name="condition" type="radio" value="Not Bad" />
                                <span className={style.text}>Not Bad</span>
                            </label>
                            <div className={style.error}><ErrorMessage name="condition" /></div>



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