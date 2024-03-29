import { Layout, Typography } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthHeader from "../../components/AuthHeader";
import SideNavBar from "../../components/SideNavBar";

const { Content } = Layout;
const { Title } = Typography;

function Profile() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch(function (error) {
                setError(error.response.data);
            }).then(function () {
                setLoading(false);
            });
    }

    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title level={4}>My Profile</Title>
                </Content>
            </Layout>
        </Layout>
    )
}

export default (Profile);
