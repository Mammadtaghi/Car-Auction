import React from 'react';
import { Helmet } from "react-helmet-async";
import style from './index.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../Context/userContext';
import { jwtDecode } from "jwt-decode";

function Login() {

    const navigate = useNavigate()

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    async function Login(values) {
        try {
            const response = await axios.post('http://localhost:4728/user/login', values)
            console.log(response.data);
            setMessage(response.data.message)

            const decodedUser = jwtDecode(response.data.data)

            setUser({
                id: decodedUser.id,
                username: decodedUser.username,
                role: decodedUser.role,
                basket: decodedUser.basket,
                wishlist: decodedUser.wishlist,
                vending: decodedUser.vending,
                token: response.data.data
            })

            navigate('/')

        } catch (error) {
            console.log(error.response.data);
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Login</title>
            </Helmet>
            <div id={style.Login}>
                <div className={style.container}>
                    <h1 className={`${style.title}`}>Log In</h1>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be 25 characters or less')
                                .required('Required'),
                            password: Yup.string()
                                .min(4, 'Must be al least 4 characters!')
                                .required('Required'),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values);
                            Login(values)
                            resetForm()
                        }}
                    >
                        <Form className={`${style.formik}`}>
                            <label htmlFor="username">Username</label>
                            <Field className={`${style.input}`} name="username" type="text" />
                            <div className={`${style.error}`}><ErrorMessage name="username" /></div>

                            <label htmlFor="password">Password</label>
                            <Field className={`${style.input}`} name="password" type="password" />
                            <div className={`${style.error}`}><ErrorMessage name="password" /></div>

                            <button className={`Button`} type="submit">Submit</button>

                        </Form>
                    </Formik>
                    <p className={`${style.register}`}>
                        You haven't sign up yet ? <Link className={`${style.signup}`} to={"/register"}>Sign Up Now!</Link>
                    </p>
                    <p className={style.message}>{message}</p>
                </div>
            </div>
        </>
    )
}

export default Login