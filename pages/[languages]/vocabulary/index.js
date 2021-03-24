import { Avatar, Card, Col, Row } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../components/constants/api-config';

const { Meta } = Card;
const VocabularyIndex = (props) => {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const listTopics = () => {
        setLoading(true);
        setError(null);

        axios.get(`${API_BASE_URL}topics`)
            .then(function (response) {
                if (response.status === 200) {
                    setTopics(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response ? error.response.data.msg : error.message);
            }).then(function () {
                setLoading(false);
            });
    }

    useEffect(() => {
        listTopics()
    }, []);

    return (
        <div>
            <Row gutter={[{ xs: 12, sm: 16, md: 24, lg: 32 }, { xs: 12, sm: 16, md: 24, lg: 32 }]}>
                {topics.map((item, index) => (
                    <React.Fragment key={index} >
                        <Col key={`${index}`} xs={0} sm={8} md={6} lg={6} xl={4} xxl={3}>
                            <Link href={`/telugu/vocabulary/${item.name}`}>
                                <a>
                                    <Card
                                        hoverable
                                        className="animate__animated animate__fadeIn animate__slow"
                                        style={{ textAlign: "center", borderRadius: '2rem', borderColor: '#fff' }}
                                        cover={<img alt={`Vocabulary ${item.name}`} rel="preconnect" src={item.imageUrl} style={{ height: "80px", width: "auto", margin: "24px auto 0" }} />}
                                    >
                                        <Meta title={item.name} description={item.telugu} style={{ textAlign: "center" }} />
                                    </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col key={`m${index}`} xs={24} sm={0}>
                            <Link href={`/telugu/vocabulary/${item.name}`}>
                                <a>
                                    <Card hoverable
                                        style={{ borderRadius: '1rem' }}>
                                        <Meta
                                            avatar={
                                                <Avatar alt={`Vocabulary ${item.name}`} src={item.imageUrl} shape="square" size={50} />
                                            }
                                            title={item.name}
                                            description={item.telugu}
                                        />
                                    </Card>
                                </a>
                            </Link>
                        </Col>
                    </React.Fragment >
                ))
                }
            </Row >
        </div>
    )
}
export default VocabularyIndex;