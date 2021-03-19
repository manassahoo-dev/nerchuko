import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { menus } from '../components/constants/menus';
import UserContext from '../components/contexts/UserContext';
const { Header, Sider, Content } = Layout;

const SideNavBar = props => {
    const { logOut } = useContext(UserContext);
    const [current, setCurrent] = useState('dashboard');
    const [roles, setRoles] = useState([]);
    const [collapsed, setCollapsed] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathName = window.location.pathname;
            setCurrent(pathName);
        }
        let result = JSON.parse(atob(localStorage.getItem("r"))).map(a => a.name);
        setRoles(result);
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
                <div className="text-center"> <img src="/images/logo.svg" alt="logo" height="60" style={{ padding: '10px' }} /></div>
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