import { Layout, Table, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthHeader from "../../components/AuthHeader";
import { API_BASE_URL } from '../../components/constants/api-config';
import privateRoute from "../../components/PrivateRoute";
import SideNavBar from "../../components/SideNavBar";

const { Content } = Layout;
const { Title } = Typography;

function AdminUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        listUsers();
    }, []);

    const listUsers = () => {
        axios.get(`${API_BASE_URL}users`)
            .then(function (response) {
                if (response.status === 200) {
                    setUsers(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name', },
        { title: 'Email', dataIndex: 'email', key: 'email', },
        { title: 'Enabled', dataIndex: 'enabled', key: 'enabled', },
        { title: 'Verified', dataIndex: 'emailVerified', key: 'emailVerified', },
    ];

    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title>Users</Title>
                    <Table columns={columns} dataSource={users} loading={loading} rowKey="email" />
                </Content>
            </Layout>
        </Layout>
    )
}
export default privateRoute(AdminUsers);
