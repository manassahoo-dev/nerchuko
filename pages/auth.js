import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { API_BASE_URL } from '../components/constants/api-config';
import { authHeader } from '../components/constants/authHeader';
import UserContext from '../components/contexts/UserContext';

export default function Auth(props) {

    const [form] = Form.useForm();
    const { login } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [action, setAction] = useState(Authentication.LOGIN);

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
        form.validateFields()
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
        setAction(Authentication.LOGIN)
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
        },
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>Login</Button>
            <Modal title={false} footer={false} centered
                visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Card bordered={false}>
                    <div>
                        <h1 className="m0">{action}</h1><br />
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
                            name="form"
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            validateMessages={validateMessages}
                        >
                            {action === Authentication.LOGIN
                                &&
                                <>
                                    <Form.Item label="Email address" name="email" rules={[{ type: 'email', required: true }]}>
                                        <Input prefix={<UserOutlined />} placeholder="email" />
                                    </Form.Item>

                                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>
                                        <span className="float-right">
                                            <Button type="link" className="mx-2" onClick={() => setAction(Authentication.FORGOT_PASSWORD)}>Forgot password</Button>
                                        </span>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Login</Button>
                                    </Form.Item>
                                </>
                            }
                            {action === Authentication.SIGNUP
                                &&
                                <>
                                    <Form.Item label="Email address" name="email" rules={[{ type: 'email', required: true }]}>
                                        <Input prefix={<UserOutlined />} placeholder="email" />
                                    </Form.Item>

                                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                                        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Login</Button>
                                    </Form.Item>
                                </>
                            }
                            {action === Authentication.FORGOT_PASSWORD
                                &&
                                <>
                                    <Form.Item label="Email address" name="email" rules={[{ type: 'email', required: true }]}>
                                        <Input prefix={<UserOutlined />} placeholder="email" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Send</Button>
                                    </Form.Item>
                                </>
                            }
                        </Form>
                    </div>
                    {action === Authentication.LOGIN &&
                        <p className="text-center">Do not have an account yet?
                        <Button type="link" onClick={() => setAction(Authentication.SIGNUP)}>Signup</Button>
                        </p>
                    }
                    {action === Authentication.SIGNUP && <p className="text-center">Already have an account?
                        <Button type="link" onClick={() => setAction(Authentication.LOGIN)}>Login</Button>
                    </p>
                    }
                </Card>
            </Modal>
        </>
    )
}

const Authentication = {
    LOGIN: "Login",
    SIGNUP: "Signup",
    FORGOT_PASSWORD: "Forgot Password",
}
