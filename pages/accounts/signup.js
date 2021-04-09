import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Col, Form, Input, Layout, message, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { API_BASE_URL } from '../../components/constants/api-config';

const { Title } = Typography;
const { Header } = Layout;

export default function Signup() {
    const [signupForm] = Form.useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignup = (values) => {
        setLoading(true);
        setError(null);

        axios.post(`${API_BASE_URL}auth/register`, values)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    message.success(response.data.message);
                    signupForm.resetFields();
                }
            })
            .catch(function (error) {
                setError(error.response ? error.response.data.message : error.message);
            }).then(function () {
                setLoading(false);
            });
    }

    const onFinish = values => {
        handleSignup(values);
    };

    const onFinishFailed = errorInfo => {
        setError('Validation Failed');
    };

    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={12}><Link href="/"><a><img src="/images/logo.svg" alt="logo" className="logo" /></a></Link></Col>
                    <Col span={12}><Link href="/accounts/login"><a className="float-right"><Button type="primary">Login</Button></a></Link></Col>
                </Row>
            </Header>
            <Row type="flex" justify="center" align="middle" className="auth-card-row">
                <Col xs={1} sm={6} md={6} lg={8}></Col>
                <Col xs={22} sm={12} md={12} lg={8}>
                    <Spin spinning={loading} tip="Processing..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} >
                        <Card className="auth-card">
                            <div>
                                <Title className="m0">Signup</Title>
                                <p>Follow the easy steps</p><br />
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
                                    name="signupForm"
                                    form={signupForm}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{ required: true, message: 'Please input your Name' }]}
                                    >
                                        <Input />
                                    </Form.Item>
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
                                    <Form.Item
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Sign Up</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <p className="text-muted text-center mt-5">Do you have an account? <Link href="/accounts/login"><a className="mx-2">Login</a></Link></p>
                        </Card>
                    </Spin>
                </Col>
                <Col xs={1} sm={6} md={6} lg={8}></Col>
            </Row>
        </Layout>
    )
}