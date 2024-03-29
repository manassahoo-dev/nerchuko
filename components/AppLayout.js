import { Layout } from 'antd';
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const { Content } = Layout;

const AppLayout = props => {
    let showHeaderFooter = true;
    let pathName = "/"
    if (typeof window !== "undefined") {
        pathName = window.location.pathname;
        const paths = ["/accounts/login", "/accounts/signup", "/accounts/forgot", "/accounts/verify",
            "/", "/accounts/profile", "/accounts/dashboard", "/courses", "/settings",
            "/admin", "/admin/users", "/admin/seo", "/admin/topics", "/admin/upload"];
        showHeaderFooter = paths.includes(pathName) ? false : true;

    }
    return (
        <>
            {pathName === '/' ?
                <>
                    <AppHeader current={pathName} />
                    {props.children}
                    <AppFooter />
                </>
                :


                pathName !== '/' && showHeaderFooter ?
                    <Layout className="min-vh-100">
                        <AppHeader current={pathName} />
                        <Content>{props.children}</Content>
                        <AppFooter />
                    </Layout> :
                    <div className="min-vh-100">
                        {props.children}
                    </div>
            }
        </>
    )
};

export default AppLayout;