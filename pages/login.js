import React, { useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import { API_BASE_URL, APP_BASE_URL } from '../components/constants/api-config';
import Meta from '../components/Meta';

export default function Login() {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null,
        processing: false
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        setState(prevState => ({
            ...prevState,
            'processing': true
        }))
        const payload = {
            "email": state.email,
            "password": state.password,
        }
        axios.post(`${API_BASE_URL}/login`, payload)
            .then(function (response) {
                if (response.data.code === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': 'Login successful. Redirecting to home page..',
                        'processing': false
                    }))
                    redirectToHome();
                    props.showError(null)
                } else if (response.data.code === 204) {
                    props.showError("Username and password do not match");
                } else {
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
                setState(prevState => ({
                    ...prevState,
                    'processing': false
                }))
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
                        <form className="my-4">
                            <div className="form-group">
                                <label htmlFor="email" className="m-0 font-weight-bold text-black-50">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={state.email}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="m-0 font-weight-bold text-black-50">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={state.password}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember">
                                    <input className="checkbox" id="remember" type="checkbox" />
                                    <span className="ml-1">Remember me</span>
                                </label>
                                <Link href="/forgot"><a className="float-right">Forgot password?</a></Link>
                            </div>
                            <div className="form-group">
                                {state.processing ?
                                    <button className="btn btn-primary btn-block" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span className="ml-2">Logging in</span>
                                    </button> :
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        onClick={handleSubmitClick}>Login</button>}


                            </div>
                            <div className="form-group">
                                <p className="text-muted text-center">Do not have an account?
                                    <Link href="/signup"><a className="mx-2">Signup</a></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col d-none d-sm-block"></div>
        </div>
    )
}