import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Layout } from 'antd';
const { Content } = Layout;

const AppLayout = props => {
    let showHeaderFooter = true;
    if (typeof window !== "undefined") {
        const pathName = window.location.pathname;
        const paths = ["/login", "/signup", "/forgot",
            "/profile", "/dashboard", "/courses", "/settings"];
        showHeaderFooter = paths.includes(pathName) ? false : true;

    }
    return (
        <>
            {showHeaderFooter ?
                <Layout style={{ minHeight: "100vh" }}>
                    <AppHeader />
                    <Content>{props.children}</Content>
                    <AppFooter />
                </Layout> :
                <div style={{ minHeight: "100vh" }}>
                    {props.children}
                </div>}
        </>
    )
};

export default AppLayout;