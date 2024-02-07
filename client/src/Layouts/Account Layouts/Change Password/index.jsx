import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../../Context/userContext';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function ChangePassword() {

    const [message, setMessage] = React.useState('')

    const { user, setUser, Logout } = useUser()

    async function ChangePassword(values) {

        values.username = user.username

        try {
            const response = await axios({
                method: 'put',
                url: 'http://localhost:4728/user/change-password',
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
                <title>ChangePassword</title>
            </Helmet>
            <div id={style.ChangePassword}>
                <div className={style.container}>
                    <Formik
                        initialValues={{ password: '', newPassword: '' }}
                        validationSchema={Yup.object({
                            password: Yup.string()
                                .min(4, 'Must be al least 4 characters!')
                                .required('Required'),
                            newPassword: Yup.string()
                                .min(4, 'Must be al least 4 characters!')
                                .required('Required'),

                        })}
                        onSubmit={(values, { resetForm }) => {
                            ChangePassword(values)
                            resetForm()
                        }}
                    >
                        <Form className={`${style.formik}`}>
                            <label htmlFor="password">Old Password</label>
                            <Field className={style.input} name="password" type="text" />
                            <div className={style.error}><ErrorMessage name="password" /></div>

                            <label htmlFor="newPassword">New Password</label>
                            <Field className={style.input} name="newPassword" type="text" />
                            <div className={style.error}><ErrorMessage name="newPassword" /></div>

                            <button className={`Button`} type="submit">Submit</button>
                        </Form>
                    </Formik>
                    <p className={style.message}>{message}</p>
                </div>
            </div>
        </>
    )
}

export default ChangePassword