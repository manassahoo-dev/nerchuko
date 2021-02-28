import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';

import { useContext } from 'react';
import UserContext from '../components/contexts/UserContext';
import { Layout, Menu, Switch } from 'antd';
const { Header, Sider, Content } = Layout;

import { HomeOutlined, UnorderedListOutlined, UserOutlined, MailOutlined, LogoutOutlined, ReadOutlined, QuestionOutlined } from '@ant-design/icons';

const SideNavBar = props => {
    const { logOut } = useContext(UserContext);
    const [current, setCurrent] = useState('dashboard');
    const [role, setRole] = useState(false);
    const [collapsed, setCollapsed] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathName = window.location.pathname;
            setCurrent(pathName);
        }
        setRole(window.atob(localStorage.getItem("r")));
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
                <div className="text-center"> <img src="/image/logo.png" alt="logo" height="60" style={{ padding: '10px' }} /></div>
                {role === 'student' ?
                    <Menu onClick={handleClick} selectedKeys={[current]} theme="light" mode="inline">
                        <Menu.Item key="/dashboard" icon={<HomeOutlined />}><Link href="/dashboard"><a>Dashboard</a></Link></Menu.Item>
                        <Menu.Item key="/courses" icon={<UnorderedListOutlined />}><Link href="/courses"><a>Courses</a></Link></Menu.Item>
                        <Menu.Item key="/profile" icon={<UserOutlined />}><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                        <Menu.Item key="/contact-us" icon={<MailOutlined />}><Link href="/contact-us"><a>Contact Us</a></Link></Menu.Item>
                        <Menu.Item key="5" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
                    </Menu>
                    :
                    <Menu onClick={handleClick} selectedKeys={[current]} theme="light" mode="inline">
                        <Menu.Item key="/admin/courses" icon={<UnorderedListOutlined />}><Link href="/admin/courses"><a>Courses</a></Link></Menu.Item>
                        <Menu.Item key="/admin/blog" icon={<ReadOutlined />}><Link href="/admin/blog"><a>Blog</a></Link></Menu.Item>
                        <Menu.Item key="/admin/users" icon={<UserOutlined />}><Link href="/admin/users"><a>Users</a></Link></Menu.Item>
                        <Menu.Item key="/admin/quiz" icon={<QuestionOutlined />}><Link href="/admin/quiz"><a>Quiz</a></Link></Menu.Item>
                        <Menu.Item key="5" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
                    </Menu>
                }
            </Sider>
        </>
    )
};

export default SideNavBar;