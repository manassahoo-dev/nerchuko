import { DownOutlined, LogoutOutlined, MenuOutlined, UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Drawer, Dropdown, Layout, Menu, Row, Space, List } from 'antd';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
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
        <Menu>
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

    const home = <Link href="/"><a><img src="/images/logo.svg" alt="logo" className="logo" /></a></Link>

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
                                        <a>{menu.title}</a>
                                    </Link>
                                </Menu.Item>
                            )
                            }
                        </Menu>
                    </Col>
                    <Col xs={4} sm={0}>
                        <Button type="text" className="icon" onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                    </Col>
                    <Col xs={16} sm={0} className="text-center">{home}</Col>
                    <Col xs={4} sm={0}></Col>
                    <Col xs={0} sm={4}>
                        <Row justify="end">
                            <Col>
                                <Space>
                                    <Button>+</Button>
                                    {user ?
                                        <Dropdown overlay={menu} className="float-right" placement="bottomCenter">
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <Avatar>A</Avatar>
                                                <DownOutlined />
                                            </a>
                                        </Dropdown>
                                        :
                                        <Link href="/login"><a><Button type="primary">Login</Button></a></Link>
                                    }
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Drawer
                    title={home}
                    placement="right"
                    closeIcon={<CloseCircleOutlined />}
                    onClose={onClose}
                    visible={visible}
                >
                    <Menu selectedKeys={[current]} mode="inline">
                        {menus.map((menu, index) =>
                            <Menu.Item key={menu.link}>
                                <Link key={index} href={menu.link}>
                                    <a onClick={onClose}>{menu.title}</a>
                                </Link>
                            </Menu.Item>
                        )
                        }
                    </Menu>
                    {user ?
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar>A</Avatar>
                                <DownOutlined />
                            </a>
                        </Dropdown>
                        :
                        <Link href="/login"><a onClick={onClose}><br /><Button type="primary" block>Login</Button></a></Link>
                    }
                </Drawer>
            </Header>
        </>
    )
};

export default AppHeader;