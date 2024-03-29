import { Layout, PageHeader, Table, Typography } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Text } = Typography;
const { Content } = Layout;

const Vocabulary = (props) => {
    const router = useRouter()
    const [phrases, setPhrases] = useState(null);
    const [topicName, setTopicName] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router) {
            const { id } = router.query;
            if (id) {
                setTopicName(id);
                getPhrasesByTopic(topicName);
            }
        }
    }, [router, topicName]);

    const getPhrasesByTopic = (topicName) => {
        if (topicName) {
            axios.get(`${process.env.NEXT_PUBLIC_API_URL}/topics/${topicName}/phrases`)
                .then(function (response) {
                    setPhrases(response.data);
                })
                .catch(function (error) {
                    console.error(error)
                }).then(function () {
                    setLoading(false)
                });
        }
    }
    const columns = [
        {
            title: 'English',
            dataIndex: 'engPhraseName',
            key: 'engPhraseName',
            render: (text, record) => (
                <h4>{record.engPhraseName}</h4>
            )
        },
        {
            title: 'Telugu',
            dataIndex: 'nonEngPhrases',
            key: 'nonEngPhrases',
            render: (text, record) => (
                <>{text.map((item, key) => (
                    <div key={key}>
                        <h4>{item.transliteration}</h4>
                        <Text type="secondary">{item.nonEngPhraseName}</Text>
                    </div>
                ))
                }</>
            )
        },
    ]
    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => router.back()}
                title={topicName}
            />
            { !loading && <Table pagination={false} dataSource={phrases} columns={columns} rowKey="engPhraseName" size="small" />}
        </>
    )
}
export default Vocabulary;