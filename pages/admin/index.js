import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

import SideNavBar from "../../components/SideNavBar";
import AuthHeader from "../../components/AuthHeader";
import privateRoute from "../../components/PrivateRoute";
function AdminIndex() {
    return (
        <Layout className="min-vh-100">
            <SideNavBar />
            <Layout>
                <AuthHeader />
                <Content>
                    <Title level={4}>Admin Dashboard</Title>
                </Content>
            </Layout>
        </Layout>
    )
}
export default privateRoute(AdminIndex);
