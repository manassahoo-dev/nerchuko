import { Alert, Button, Card, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { API_BASE_URL } from '../components/constants/api-config';
import { authHeader } from '../components/constants/authHeader';
import UserContext from '../components/contexts/UserContext';


export default function Login(props) {
    const [loginForm] = Form.useForm();
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAuthentication = (values) => {
        setLoading(true);
        setError(null);

        axios.post(`${API_BASE_URL}auth/login`, values)
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
        handleAuthentication(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const processAfterLoginSuccess = (accessToken) => {
        localStorage.setItem("t", accessToken);
        axios.get(`${API_BASE_URL}user/me`, authHeader())
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("r", window.btoa(response.data.roles));
                    localStorage.setItem("m", window.btoa(response.data.email))
                    login(response.data);
                    if (response.data.role === 'admin') {
                        Router.push('/admin');
                    } else {
                        Router.push('/');
                    }
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
                                    label="Email address"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your Email' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Login</Button>
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