import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { API_BASE_URL } from '../components/constants/api-config';
import { authHeader } from '../components/constants/authHeader';
import UserContext from '../components/contexts/UserContext';
import Signup from './signup';

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
                setError(error.response ? error.response.data.message : error.message);
            }).then(function () {
                setLoading(false);
            });
    }

    const onFinish = values => {
        loginForm.validateFields()
            .then(values => {
                handleAuthentication(values);
            })
            .catch(form => {
                console.log(form.errorFields);
            });
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
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <Modal title={false} footer={false} centered
                visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Card bordered={false}>
                    <div>
                        <h1 className="m0">Login</h1><br />
                        {error &&
                            <>
                                <Alert
                                    className="mb-4"
                                    message={error}
                                    type="error"
                                    showIcon
                                    closable
                                    onClose={() => setError(null)}
                                /><br /></>
                        }
                        <Form
                            name="loginForm"
                            form={loginForm}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                label="Email address"
                                name="email"
                                rules={[{ type: 'email', required: true }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="email" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true }]}
                            >
                                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <span className="float-right">
                                    <Link href="/forgot"><a className="mx-2">Forgot password</a></Link>
                                </span>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Login</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <p className="text-center">Do not have an account? <Signup /></p>
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