import { UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Col, Form, Input, Layout, Row, Space, Typography } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../components/constants/api-config';

const { Title } = Typography;
const { Header } = Layout;

export default function Forgot() {
    const [form] = Form.useForm();
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
        axios.get(`${API_BASE_URL}users/me`)
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem("r", btoa(JSON.stringify(response.data.roles)));
                    localStorage.setItem("m", btoa(response.data.email))
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
                    <Col span={12}>
                        <Space className="float-right">
                            <Link href="/accounts/signup"><a ><Button >Signup</Button></a></Link>
                            <Link href="/accounts/login"><a ><Button type="primary">Login</Button></a></Link>
                        </Space>
                    </Col>
                </Row>
            </Header>
            <Row type="flex" justify="center" align="middle" className="auth-card-row">
                <Col xs={1} sm={6} md={6} lg={8}></Col>
                <Col xs={22} sm={12} md={12} lg={8}>
                    <Card className="auth-card">
                        <div>
                            <Title className="m0">Reset Password</Title>
                            <p>Enter the email associated with your account and we'll send an email with instructions to reset your password</p><br />
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
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Send Email Instructions</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </Col>
                <Col xs={1} sm={6} md={6} lg={8}></Col>
            </Row>
        </Layout>
    )
}

