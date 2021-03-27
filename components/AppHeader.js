import { DownOutlined, LogoutOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space, Drawer } from 'antd';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Auth from '../pages/auth';
import { Authentication } from './constants/authentication';
import UserContext from './contexts/UserContext';

const { Header } = Layout;

const AppHeader = (props) => {
    const { current } = props;
    const [user, setUser] = useState(null);
    const [visible, setVisible] = useState(false);

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

    const home = <Link href="/"><a><img src="/images/logo.svg" alt="logo" className="logo"></img></a></Link>

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Header>
                <Row>
                    <Col xs={0} sm={4}>
                        {home}
                    </Col>
                    <Col xs={0} sm={16}>
                        <Menu selectedKeys={[current]} mode="horizontal">
                            {menus.map((menu, index) =>
                                <Menu.Item key={menu.link}>
                                    <Link key={index} href={menu.link}>
                                        <a style={{ fontWeight: 500 }}>{menu.title}</a>
                                    </Link>
                                </Menu.Item>
                            )
                            }
                        </Menu>
                    </Col>
                    <Col xs={4} sm={0}>
                        <Button type="text" className="icon" onClick={showDrawer}>
                            <MenuOutlined style={{ fontSize: '24px', fontWeight: 'bold' }} />
                        </Button>
                    </Col>
                    <Col xs={16} sm={0} style={{ textAlign: 'center' }}>{home}</Col>
                    <Col xs={4} sm={0}></Col>
                    <Col xs={0} sm={4}>
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
                <Drawer
                    title={home}
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                    width="100%"
                >
                    {user ?
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <img src="/image/profile.png" height="32" style={{ marginRight: '10px' }} /> <DownOutlined />
                            </a>
                        </Dropdown>
                        :
                        <h4><Link href="/login"><a onClick={onClose}>LOGIN</a></Link></h4>
                    }
                    {menus.map((menu, index) =>
                        <h4 key={index}>
                            <Link href={menu.link}><a onClick={onClose} className={current === menu.link ? 'active' : ''}>{menu.title}</a></Link>
                        </h4>)}
                </Drawer>
            </Header>
        </>
    )
};

export default AppHeader;