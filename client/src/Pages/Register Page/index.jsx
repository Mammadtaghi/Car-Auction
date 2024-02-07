import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from "axios";

function Register() {

    const [pass, setPass] = React.useState(true)

    function CheckPassword(password, correctPassword) {
        if (password === correctPassword) {
            setPass(true)
            return true
        }
        setPass(false)
        return false
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
                            console.log(CheckPassword(values.password, values.correctPassword));

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

                    <div className={`${style.error}`}>{pass ? '' : 'Please, write your passward again!'}</div>

                    <p className={`${style.bottomText}`}>
                        Do you have an account ? <Link className={`${style.login}`} to={"/login"}>Log In</Link>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Register