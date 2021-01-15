import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Layout } from 'antd';

const { Content } = Layout;

const AppLayout = props => (
    <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content>{props.children}</Content>
        <AppFooter />
    </Layout>
);

export default AppLayout;