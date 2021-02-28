import { Layout } from 'antd';
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
const { Content } = Layout;

const AppLayout = props => {
    let showHeaderFooter = true;
    let pathName = "/"
    if (typeof window !== "undefined") {
        pathName = window.location.pathname;
        const paths = ["/login", "/signup", "/forgot",
            "/profile", "/dashboard", "/courses", "/settings"];
        showHeaderFooter = paths.includes(pathName) ? false : true;

    }
    return (
        <>
            {showHeaderFooter ?
                <Layout style={{ minHeight: "100vh" }}>
                    <AppHeader current={pathName} />
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