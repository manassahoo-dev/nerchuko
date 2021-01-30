import React from 'react';

import Link from 'next/link'
import { Card, Layout, Row, Col, List, Avatar, Skeleton } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

import { BrowserView, MobileView } from 'react-device-detect';

const TopicsIndex = () => {
    const cards = [{ "id": 1, "name": "Greetings", "imageUrl": "https://image.flaticon.com/icons/svg/1006/1006555.svg" }, { "id": 2, "name": "Numbers", "imageUrl": "https://image.flaticon.com/icons/svg/2890/2890747.svg" }, { "id": 3, "name": "Family", "imageUrl": "https://image.flaticon.com/icons/svg/2219/2219802.svg" }, { "id": 4, "name": "Vegetables", "imageUrl": "https://image.flaticon.com/icons/svg/2921/2921855.svg" }, { "id": 5, "name": "Fruits", "imageUrl": "https://image.flaticon.com/icons/svg/2224/2224249.svg" }, { "id": 6, "name": "Colors", "imageUrl": "https://image.flaticon.com/icons/svg/1831/1831908.svg" }, { "id": 7, "name": "Days", "imageUrl": "https://image.flaticon.com/icons/svg/2922/2922993.svg" }]
    const loading = false
    return (
        <div>
            <MobileView>
                <List className="sm-hide md-hide lg-hide"
                    itemLayout="horizontal"
                    dataSource={cards}
                    renderItem={item => (
                        <List.Item
                            actions={!loading && [<Link href={`/topics/${item.name}`}><a></a></Link>]}
                        >
                            <Skeleton loading={loading} active avatar shape="square" paragraph={{ rows: 1 }} >
                                <Link href={`/topics/${item.name}`} style={{ 'width': '80%' }}>
                                    <a>
                                        <List.Item.Meta className="ml2"
                                            avatar={<Avatar shape="square" src={item.imageUrl} />}
                                            title={item.name}
                                            description={item.name}
                                        />
                                    </a>
                                </Link>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </MobileView>
            <BrowserView>
                <Row gutter={[24, 24]}>
                    {cards.map((item, index) => (
                        <Col key={index} className="gutter-row xs-hide" sm={8} md={6}>
                            {loading && <Skeleton.Input style={{ width: '100%', height: '190px' }} active ></Skeleton.Input>}
                            {!loading &&
                                <Link href={`/topics/${item.name}`}>
                                    <a>
                                        <Card
                                            hoverable
                                            style={{ textAlign: "center" }}
                                            cover={<img alt={item.name} rel="preconnect" src={item.imageUrl} style={{ height: "100px", width: "auto", margin: "24px auto 0" }} />}
                                        >
                                            <Meta title={item.name} style={{ textAlign: "center" }} />
                                        </Card>
                                    </a>
                                </Link>}
                        </Col>
                    ))}
                </Row>
            </BrowserView>
        </div>
    )
}
export default TopicsIndex;