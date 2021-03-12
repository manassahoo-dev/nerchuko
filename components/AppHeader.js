import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Login from '../pages/login';
import UserContext from './contexts/UserContext';
const { Header } = Layout;

const AppHeader = (props) => {
    const { current } = props;
    const [user, setUser] = useState(null);

    const menus = [
        { link: '/vocabulary', title: 'VOCABULARY' },
        { link: '/resources', title: 'RESOURCES' },
        { link: '/forum', title: 'FORUM' },
        { link: '/translate', title: 'TRANSLATE' },
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
            <Head>
                <title>The best way to learn Telugu - Nerchuko</title>
                <meta name="keywords" content="learn, telugu, free, lessons, course, language, study, flashcards" />
                <meta name="description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="title" content="The best way to learn Telugu - Nerchuko" />
                <link rel="canonical" href="https://nerchuko.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nerchuko.in/" />
                <meta property="og:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="og:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="og:image" content="https://nerchuko.in/images/thumbnail.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nerchuko.in/" />
                <meta property="twitter:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="twitter:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="twitter:image" content="https://nerchuko.in/images/thumbnail.png" />
                <script type="text/javascript" src="/scripts/clarity.js"></script>
            </Head>
            <Header>
                <Row>
                    <Col xs={12} md={4}>
                        <Link href="/"><a>
                            <img src="/images/logo.svg" className="logo"></img>
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

                                    {user ?
                                        <Dropdown overlay={menu} className="float-end" placement="bottomCenter">
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <img src="/images/user.png" height="32" style={{ marginRight: '10px' }} /> <DownOutlined />
                                            </a>
                                        </Dropdown>
                                        :
                                        <Login />
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