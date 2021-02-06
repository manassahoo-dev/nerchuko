import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import { API_BASE_URL } from '../components/constants/api-config';
import { authHeader } from '../components/constants/authHeader';
import UserContext from '../components/contexts/UserContext';
import { Form, Input, Button, Row, Col, Card, Spin, Alert } from 'antd';

export default function Login(props) {
    const [loginForm] = Form.useForm();
    const [otpForm] = Form.useForm();
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loginType, setLoginType] = useState('password');

    const handleAuthentication = (values) => {
        setLoading(true);
        setError(null);
        const param = isNaN(values.mobileOrEmail) ?
            {
                "email": values.mobileOrEmail,
                "password": values.password,
            } : {
                "phone_number": values.mobileOrEmail,
                "password": values.password,
            }

        axios.post(`${API_BASE_URL}auth/login`, param)
            .then(function (response) {
                if (response.status === 200) {
                    processAfterLoginSuccess(response.data.accessToken);
                }
            })
            .catch(function (error) {
                setError(error.response ? error.response.data.msg : error.message);
            }).then(function () {
                setLoading(false);
            });
    }

    const onFinish = values => {
        loginType === 'password' ? handleAuthentication(values) : sendEmailOTP();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const processAfterLoginSuccess = (accessToken) => {
        getProfile(accessToken);
        Router.push('/');
        localStorage.setItem("token", accessToken);
    }

    const getProfile = (accessToken) => {
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        axios.get(`${API_BASE_URL}user/me`, config)
            .then(function (response) {
                if (response.status === 200) {
                    login(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }

    return (
        <>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card bordered={false}>
                        <div>
                            <div className="clearfix">
                                <Link href="/">
                                    <a className="btn btn-outline-secondary float-end">Home</a>
                                </Link>
                            </div>
                            <h1 className="m0">Login</h1>
                            <p>Log in with your data that you entered during your registraion</p><br />
                            {error &&
                                <Alert
                                    className="mb-4"
                                    message={error}
                                    type="error"
                                    showIcon
                                    closable
                                    onClose={() => setError(null)}
                                />
                            }
                            <Form
                                name="loginForm"
                                form={loginForm}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="Mobile number/ Email address"
                                    name="mobileOrEmail"
                                    rules={[{ required: true, message: 'Please input your mobile/ email' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: loginType === 'password', message: 'Please input your password' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block
                                        disabled={loading}
                                        loading={loading && loginType === 'password'}
                                        onClick={() => setLoginType('password')}>Login</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <p className="text-muted text-center mt-5">Do not have an account?
                            <Link href="/signup"><a className="mx-2">Signup</a></Link>
                        </p>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={12} lg={12} xl={12} className="text-center" style={{ backgroundColor: '#ccc', minHeight: '100vh' }}>

                </Col>
            </Row>
        </>
    )
}

Login.getInitialProps = async () => {
    return {
        page: 'Login Page'
    }
}