import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Col, Form, Input, Layout, Row, Typography } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useContext, useState } from 'react';
import { API_BASE_URL } from '../../components/constants/api-config';
import { authHeader } from '../../components/constants/authHeader';
import UserContext from '../../components/contexts/UserContext';

const { Title } = Typography;
const { Header } = Layout;

export default function Login() {
    const [form] = Form.useForm();
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

    const processAfterLoginSuccess = (accessToken) => {
        localStorage.setItem("t", accessToken);
        axios.get(`${API_BASE_URL}user/me`, authHeader())
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("r", btoa(JSON.stringify(response.data.roles)));
                    localStorage.setItem("m", btoa(response.data.email))
                    login(response.data);
                    const roles = response.data.roles;
                    if (roles.some(role => role.name === 'ADMIN')) {
                        Router.push('/admin');
                    } else {
                        Router.push('/accounts/dashboard');
                    }
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }
    const validateMessages = {
        required: '${label} is required',
        types: {
            email: '${label} is not a valid',
        },
    };

    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={12}><Link href="/"><a><img src="/images/logo.svg" alt="logo" className="logo" /></a></Link></Col>
                    <Col span={12}><Link href="/accounts/signup"><a className="float-right"><Button type="primary">Signup</Button></a></Link></Col>
                </Row>
            </Header>
            <Row type="flex" justify="center" align="middle" className="auth-card-row">
                <Col xs={1} sm={6} md={6} lg={8}></Col>
                <Col xs={22} sm={12} md={12} lg={8}>
                    <Card className="auth-card">
                        <div>
                            <Title className="m0">Login</Title>
                            <p>Login with your data that you entered during registration.</p><br />

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
                                <Form.Item label="Email address" name="email" rules={[{ type: 'email', required: true }]} >
                                    <Input prefix={<UserOutlined />} placeholder="Email" />
                                </Form.Item>

                                <Form.Item label="Password" name="password" rules={[{ required: true }]} >
                                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>
                                    <span className="float-right">
                                        <Link href="/accounts/forgot"><a>Forgot Password?</a></Link>
                                    </span>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Login</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <p className="text-center">Do not have an account yet? <Link href="/accounts/signup"><a>Signup</a></Link></p>
                    </Card>
                </Col>
                <Col xs={1} sm={6} md={6} lg={8}></Col>
            </Row>
        </Layout>
    )
}

