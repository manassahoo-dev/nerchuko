import { Layout, Table, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthHeader from "../../components/AuthHeader";
import privateRoute from "../../components/PrivateRoute";
import SideNavBar from "../../components/SideNavBar";

const { Content } = Layout;
const { Title } = Typography;

function AdminTopics() {
    const [loading, setLoading] = useState(true);
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        listTopics();
    }, []);

    const listTopics = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/topics`)
            .then(function (response) {
                if (response.status === 200) {
                    setTopics(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }

    const columns = [
        { title: 'name', dataIndex: 'name', key: 'name', },
        { title: 'Image', dataIndex: 'imageUrl', key: 'imageUrl', },
    ];

    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title>Manage Topics</Title>
                    <Table columns={columns} dataSource={topics} loading={loading} rowKey="id" />
                </Content>
            </Layout>
        </Layout>
    )
}
export default privateRoute(AdminTopics);
