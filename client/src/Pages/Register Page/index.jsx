import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useUser } from '../../Context/userContext';

function Register() {

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    function CheckPassword(password, correctPassword) {
        if (password === correctPassword) {
            return true
        }
        setMessage('Please, check correct password!')
        return false
    }

    async function Register(values) {
        try {
            const response = await axios.post('http://localhost:4728/user/register', values)
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

        } catch (error) {
            console.log(error.response.data);
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Register</title>
            </Helmet>
            <div id={style.Register}>
                <div className={style.container}>
                    <h1 className={`${style.title}`}>Register</h1>
                    <Formik
                        initialValues={{ username: '', password: '', correctPassword: '' }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be 25 characters or less')
                                .required('Required'),
                            password: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                            correctPassword: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Required'),
                        })}
                        onSubmit={(values, { resetFrom }) => {
                            console.log(values);
                            CheckPassword(values.password, values.correctPassword) ? Register(values) : console.log("no");

                        }}
                    >
                        <Form className={`${style.formik}`}>
                            <label htmlFor="username">Username</label>
                            <Field className={`${style.input}`} name="username" type="text" />
                            <div className={`${style.error}`}><ErrorMessage name="username" /></div>

                            <label htmlFor="password">Password</label>
                            <Field className={`${style.input}`} name="password" type="password" />
                            <div className={`${style.error}`}><ErrorMessage name="password" /></div>

                            <label htmlFor="correctPassword">Correct Password</label>
                            <Field className={`${style.input}`} name="correctPassword" type="password" />
                            <div className={`${style.error}`}><ErrorMessage name="correctPassword" /></div>

                            <button className={`Button`} type="submit">Submit</button>

                        </Form>
                    </Formik>

                    <p className={`${style.bottomText}`}>
                        Do you have an account ? <Link className={`${style.login}`} to={"/login"}>Log In</Link>
                    </p>
                    <p className={style.message}>{message}</p>
                </div>
            </div>
        </>
    )
}

export default Register