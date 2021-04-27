import { Avatar, Card, Col, Row } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const { Meta } = Card;
const VocabularyIndex = (props) => {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const listTopics = () => {
        setLoading(true);
        setError(null);

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/topics`)
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

    function getRandomColor() {
        return 'rgb(' +
            (Math.floor(Math.random() * 56) + 200) + ', ' +
            (Math.floor(Math.random() * 56) + 200) + ', ' +
            (Math.floor(Math.random() * 56) + 200) +
            ')';
    }

    return (
        <div>
            <Row gutter={[{ xs: 12, sm: 16, md: 24, lg: 24 }, { xs: 12, sm: 16, md: 24, lg: 24 }]}>
                {topics.map((item, index) => (
                    <React.Fragment key={index} >
                        <Col key={`${index}`} xs={0} sm={8} md={6} lg={6} xl={3} xxl={3}>
                            <Link href={`/telugu/vocabulary/${item.name.toLowerCase()}`}>
                                <a>
                                    <Card
                                        hoverable
                                        className="text-center"
                                        cover={<img alt={`Vocabulary ${item.name}`} rel="preconnect" src={item.imageUrl} className="vocabulary-card" />}
                                    >
                                        <Meta title={item.name} description={item.telugu} className="text-center" />
                                    </Card>
                                </a>
                            </Link>
                        </Col>
                        <Col key={`m${index}`} xs={24} sm={0}>
                            <Link href={`/telugu/vocabulary/${item.name.toLowerCase()}`}>
                                <a>
                                    <Card hoverable>
                                        <Meta avatar={<Avatar alt={`Vocabulary ${item.name}`} src={item.imageUrl} shape="square" size={50} />}
                                            title={item.name} description={item.telugu}
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