import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import UserContext from './contexts/UserContext';

const { Header } = Layout;

const AppHeader = (props) => {
    const { current } = props;
    console.log(current)
    const [user, setUser] = useState(null);

    const links = [
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
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content="The best way to learn Telugu - Nerchuko" />
                <link rel="canonical" href="https://nerchuko.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nerchuko.in/" />
                <meta property="og:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="og:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="og:image" content="https://nerchuko.in/thumbnail.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nerchuko.in/" />
                <meta property="twitter:title" content="The best way to learn Telugu - Nerchuko" />
                <meta property="twitter:description" content="Learn Telugu through our lessons such as alphabet, adjectives, nouns, plural, gender, numbers, phrases, grammar, vocabulary, verbs, exam, audio, translation and much more online and for free easily and quickly." />
                <meta property="twitter:image" content="https://nerchuko.in/thumbnail.png" />

            </Head>
            <Header>
                <Row>
                    <Col xs={12} sm={6}>
                        <Link href="/"><a>
                            <img src="/logo.svg" className="logo"></img>
                        </a></Link>
                    </Col>
                    <Col xs={0} sm={12}>
                        <Row justify="center">
                            <Col>
                                <Space size={48}>
                                    {links.map((link, key) =>
                                        <Link href={link.link} key={key}>
                                            <a className="menu-item">{link.title}</a>
                                        </Link>
                                    )}
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6}>
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
                                        <Button type="primary"><Link href="/login"><a>LOGIN</a></Link></Button>
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