import { LoadingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Col, Divider, Form, Input, Layout, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import { getCsrfToken, signIn } from 'next-auth/client';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiFacebookFill, RiGithubFill, RiGoogleFill } from "react-icons/ri";
import { useRouter } from 'next/router';
const { Title } = Typography;
const { Header } = Layout;

export default function Login({ csrfToken }) {
    const [form] = Form.useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleAuthentication = (values) => {
        setLoading(true);
        setError(null);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, values)
            .then(function (response) {
                if (response.status === 200) {
                    signIn('credentials', { ...values, name: response.data.name, image: response.data.image });
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

    const validateMessages = {
        required: '${label} is required',
        types: {
            email: '${label} is not a valid',
        },
    };

    const socialLoginOptions = [
        { name: 'facebook', label: 'Facebook', icon: <RiFacebookFill /> },
        { name: 'google', label: 'Google', icon: <RiGoogleFill /> },
        { name: 'github', label: 'Github', icon: <RiGithubFill /> },
    ]

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
                    <Spin spinning={loading} tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} >
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
                                    <Form.Item hidden name="csrfToken" defaultValue={csrfToken} >
                                        <Input />
                                    </Form.Item>
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
                                <Divider>OR</Divider>
                            </div>
                            <Row gutter={[16, 16]}>
                                {socialLoginOptions.map((option, key) =>
                                    <Col span={24 / socialLoginOptions.length} key={key}>
                                        <Button block onClick={() => signIn(`${option.name}`)} icon={option.icon} >{option.label}</Button>
                                    </Col>
                                )}
                            </Row>
                            <br /><p className="text-center">Do not have an account yet? <Link href="/accounts/signup"><a>Signup</a></Link></p>
                        </Card>
                    </Spin>
                </Col>
                <Col xs={1} sm={6} md={6} lg={8}></Col>
            </Row>
        </Layout >
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}