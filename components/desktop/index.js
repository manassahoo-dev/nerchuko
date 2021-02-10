import React from 'react';

import Link from 'next/link'
import { Card, Layout, Row, Col, List, Avatar, Skeleton } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

const DesktopTopicsIndex = (props) => {
    const { data } = props

    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 12, sm: 16, md: 24, lg: 32 }]}>
            {data.map((item, index) => (
                <>
                    <Col key={`${index}`} xs={0} sm={8} md={6} lg={6} xl={4} xxl={3}>
                        <Link href={`/topics/${item.name}`}>
                            <a>
                                <Card
                                    hoverable
                                    style={{ textAlign: "center", borderRadius: '2rem' }}
                                    cover={<img alt={item.name} rel="preconnect" src={item.imageUrl} style={{ height: "80px", width: "auto", margin: "24px auto 0" }} />}
                                >
                                    <Meta title={item.name} description={item.telugu} style={{ textAlign: "center" }} />
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    <Col key={`m${index}`} xs={24} sm={0}>
                        <Link href={`/topics/${item.name}`}>
                            <a>
                                <Card hoverable
                                    style={{ borderRadius: '1rem' }}>
                                    <Meta
                                        avatar={
                                            <Avatar src={item.imageUrl} shape="square" size={50} />
                                        }
                                        title={item.name}
                                        description={item.telugu}
                                    />
                                </Card>
                            </a>
                        </Link>
                    </Col>
                </>
            ))}
        </Row>
    )
}
export default DesktopTopicsIndex;