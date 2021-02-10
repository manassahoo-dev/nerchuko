import React from 'react';

import Link from 'next/link'
import { Card, Layout, Row, Col, List, Avatar, Skeleton } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

const DesktopTopicsIndex = (props) => {
    const { data } = props

    return (
        <Row gutter={[24, 24]}>
            {data.map((item, index) => (
                <Col key={index} className="gutter-row xs-hide" xs={12} sm={8} md={6} lg={6} xl={4} xxl={3}>
                    <Link href={`/topics/${item.name}`}>
                        <a>
                            <Card
                                hoverable
                                style={{ textAlign: "center", borderRadius: '2rem' }}
                                cover={<img alt={item.name} rel="preconnect" src={item.imageUrl} style={{ height: "80px", width: "auto", margin: "24px auto 0" }} />}
                            >
                                <Meta title={item.name} style={{ textAlign: "center", marginTop: '-1rem' }} />
                            </Card>
                        </a>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}
export default DesktopTopicsIndex;