import { Alert, Button, Card, Col, Form, Input, Row } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { API_BASE_URL } from '../components/constants/api-config';

export default function Signup() {
    const [signupForm] = Form.useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = (values) => {
        setLoading(true);
        setError(null);

        axios.post(`${API_BASE_URL}auth/register`, values)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {

                }
            })
            .catch(function (error) {
                setError(error.response ? error.response.data.message : error.message);
            }).then(function () {
                setLoading(false);
            });
    }

    const onFinish = values => {
        handleRegister(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

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
                            <h1 className="m0">Sign Up</h1>
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
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    rules={[{ required: true, message: 'Please input your Confirm Password' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block disabled={loading} loading={loading}>Sign Up</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <p className="text-muted text-center mt-5">Do you have an account?
                            <Link href="/login"><a className="mx-2">Login</a></Link>
                        </p>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={12} lg={12} xl={12} className="text-center" style={{ backgroundColor: '#f1f1f1', minHeight: '100vh' }}>

                </Col>
            </Row>
        </>
    )
}