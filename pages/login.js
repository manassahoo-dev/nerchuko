import { Alert, Button, Card, Form, Input, Modal } from 'antd';
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
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const processAfterLoginSuccess = (accessToken) => {
        localStorage.setItem("t", accessToken);
        axios.get(`${API_BASE_URL}user/me`, authHeader())
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("r", window.btoa(response.data.roles));
                    localStorage.setItem("m", window.btoa(response.data.email))
                    login(response.data);
                    const roles = response.data.roles;
                    if (roles.some(role => role.name === 'ADMIN')) {
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
                setIsModalVisible(false);
            });
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <Modal title={false} footer={false} centered
                visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Card bordered={false}>
                    <div>
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
            </Modal>
        </>
    )
}

Login.getInitialProps = async () => {
    return {
        page: 'Login Page'
    }
}