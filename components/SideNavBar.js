import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react';
import { menus } from '../components/constants/menus';
import UserContext from '../components/contexts/UserContext';
const { Header, Sider, Content } = Layout;

const SideNavBar = props => {
    const router = useRouter()
    const { logOut } = useContext(UserContext);
    const [current, setCurrent] = useState('dashboard');
    const [roles, setRoles] = useState([]);
    const [collapsed, setCollapsed] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathName = window.location.pathname;
            setCurrent(pathName);
        }
        const role = localStorage.getItem("r");
        if (role) {
            let result = JSON.parse(atob(role)).map(a => a.name);
            setRoles(result);
        } else {
            router.push("/");
        }
    }, []);

    function onCollapse(collapsed) {
        setCollapsed(collapsed);
    };

    function handleClick(e) {
        setCurrent(e.key);
    }

    return (
        <>
            <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="ant-layout-header"> <img src="/images/logo.svg" alt="logo" className="logo" /></div>
                <Menu onClick={handleClick} selectedKeys={[current]} theme="light" mode="inline">
                    {menus.map((menu, key) =>
                        <Menu.Item key={menu.link} icon={menu.icon} className={!roles.includes(menu.role) && 'd-none'}>
                            <Link href={menu.link}><a>{menu.name}</a></Link>
                        </Menu.Item>
                    )}
                    <Menu.Item key="5" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
                </Menu>
            </Sider>
        </>
    )
};

export default SideNavBar;