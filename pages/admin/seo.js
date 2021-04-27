import { Layout, Table, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthHeader from "../../components/AuthHeader";
import privateRoute from "../../components/PrivateRoute";
import SideNavBar from "../../components/SideNavBar";

const { Content } = Layout;
const { Title } = Typography;

function AdminSeo() {
    const [loading, setLoading] = useState(true);
    const [seo, setSeo] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        listSeo();
    }, []);

    const listSeo = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seo`)
            .then(function (response) {
                if (response.status === 200) {
                    setSeo(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title', },
        { title: 'Keywords', dataIndex: 'keywords', key: 'keywords', },
        { title: 'Description', dataIndex: 'description', key: 'description', },
        { title: 'Image', dataIndex: 'image', key: 'image', },
        { title: 'URL', dataIndex: 'url', key: 'url', },
    ];

    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title>Manage SEO</Title>
                    <Table columns={columns} dataSource={seo} loading={loading} rowKey="id" />
                </Content>
            </Layout>
        </Layout>
    )
}
export default privateRoute(AdminSeo);
