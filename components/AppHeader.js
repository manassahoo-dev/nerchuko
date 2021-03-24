import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Auth from '../pages/auth';
import UserContext from './contexts/UserContext';
import { Authentication } from './constants/authentication';

const { Header } = Layout;

const AppHeader = (props) => {
    const { current } = props;
    const [user, setUser] = useState(null);

    const menus = [
        { link: '/telugu/vocabulary', title: 'VOCABULARY' },
        { link: '/resources', title: 'RESOURCES' },
        { link: '/telugu/forum', title: 'FORUM' },
        { link: '/telugu/translate', title: 'TRANSLATE' },
        { link: '/telugu/alphabets', title: 'ALPHABETS' },
    ];
    const { logOut } = useContext(UserContext);

    const menu = (
        <Menu style={{ minWidth: '150px' }}>
            <Menu.Item key="profile" icon={<UserOutlined />}><Link href="/profile"><a>Profile</a></Link></Menu.Item>
            <Menu.Divider></Menu.Divider>
            <Menu.Item key="logOut" icon={<LogoutOutlined />}><Link href="/"><a onClick={logOut}>Logout</a></Link></Menu.Item>
        </Menu>
    );
    useEffect(() => {
        if (typeof window !== "undefined") {
            const pathName = window.location.pathname;
            setUser(localStorage.getItem("m"));
        }
    }, []);

    return (
        <>
            <Header>
                <Row>
                    <Col xs={12} md={4}>
                        <Link href="/"><a>
                            <img src="/images/logo.svg" alt="logo" className="logo"></img>
                        </a></Link>
                    </Col>
                    <Col xs={0} md={16}>
                        <Row justify="center">
                            <Col>
                                {menus.map((menu, index) =>
                                    <Link key={index} href={menu.link}>
                                        <a className={current === menu.link ? 'menu-item active' : 'menu-item'}>{menu.title}</a>
                                    </Link>)}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <Row justify="end">
                            <Col>
                                <Space>
                                    <Button>+</Button>
                                    {user ?
                                        <Dropdown overlay={menu} className="float-right" placement="bottomCenter">
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <img src="/images/user.png" height="32" style={{ marginRight: '10px' }} /> <DownOutlined />
                                            </a>
                                        </Dropdown>
                                        :
                                        <Auth action={Authentication.LOGIN} label="Login" />
                                    }
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </>
    )
};

export default AppHeader;