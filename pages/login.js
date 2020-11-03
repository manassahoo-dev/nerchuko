import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { API_BASE_URL, APP_BASE_URL } from '../components/constants/api-config';
import { authHeader } from '../components/constants/authHeader';
import UserContext from '../components/contexts/UserContext';

import Meta from '../components/Meta';

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .required(),
    password: Yup
        .string()
        .min(4)
        .max(16)
        .required(),
});

export default function Login(props) {
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);
    const initialValues = {
        email: '',
        password: '',
    }
    const onSubmit = (values, actions) => {
        handleAuthentication(values, actions);
    }

    const handleAuthentication = (values, actions) => {
        axios.post(`${API_BASE_URL}/auth/login`, values)
            .then(function (response) {
                if (response.status === 200) {
                    Router.push('/');
                    localStorage.setItem("token", response.data.accessToken);
                    getCurrentUser();
                }
            })
            .catch(function (error) {
                setError(" Incorrect email or password. ");
            }).then(function () {
                actions.setSubmitting(false);
            });
    }

    const getCurrentUser = () => {
        axios.get(`${API_BASE_URL}/user/me`, {
            headers: authHeader()
        })
            .then(function (response) {
                if (response.status === 200) {
                    login(response.data);
                } else if (response.status === 401) {
                    setError(" Incorrect email or password. ");
                } else {
                    // props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <Meta
                title='Login'
                desc='Login Form'
            />
            <div className="col d-none d-sm-block"></div>
            <div className="col-sm-6 col-lg-5">
                <div className="card shadow  m-auto">
                    <div className="card-body m-4">
                        <h1 className="text-primary text-center">Login</h1>
                        {error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            {error}
                            <button type="button" class="close" aria-label="Close" onClick={() => setError(null)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {formik => {
                                const { errors, touched, isValid, isSubmitting } = formik;
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="email" className="m-0 font-weight-bold text-black-50">Email address</label>
                                            <Field name="email" type="email" className={`${(errors.email && touched.email) ? "form-control is-invalid" : "form-control "}`} />
                                            <div className="invalid-feedback">{errors.email && touched.email && errors.email}</div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="m-0 font-weight-bold text-black-50">Password</label>
                                            <Link href="/forgot"><a className="float-right">Forgot password?</a></Link>
                                            <Field name="password" type="password" className={`${(errors.password && touched.password) ? "form-control is-invalid" : 'form-control '}`} />
                                            <div className="invalid-feedback">{errors.password && touched.password && errors.password}</div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block my-4" disabled={!isValid || isSubmitting}>
                                            {isSubmitting ? <div><span className="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>
                                                <span className="ml-2">Logging in</span></div> : 'Login'}
                                        </button>
                                    </Form>
                                )
                            }}
                        </Formik>
                        <p className="text-muted text-center">Do not have an account?
                                    <Link href="/signup"><a className="mx-2">Signup</a></Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col d-none d-sm-block"></div>
        </div >
    )
}

Login.getInitialProps = async () => {
    return {
        page: 'Login Page'
    }
}