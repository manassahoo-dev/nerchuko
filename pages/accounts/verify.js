import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Col, Form, Layout, message, Row, Spin, Typography } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const { Title } = Typography;
const { Header } = Layout;

export default function Verify() {
    const [signupForm] = Form.useForm();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    console.log(router.query.t);

    useEffect(() => {
        if (router) {
            const token = router.query.t;
            if (token) {
                confirmRegistration(token);
            }
        }
    }, [router]);

    const confirmRegistration = (token) => {
        setLoading(true);
        setError(null);

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/confirm?token=${token}`)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    message.success(response.data.message);
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
                    <Spin spinning={loading} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} >
                        <Card className="auth-card">
                            <div>
                                <Title className="m0">Verify</Title>
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