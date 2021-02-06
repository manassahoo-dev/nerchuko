import Link from 'next/link';
import Head from 'next/head';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';
import { Layout, Row, Col, Space, Button } from 'antd';
const { Header } = Layout;

const AppHeader = () => {
    const links = [
        { link: '/vocabulary', title: 'VOCABULARY' },
        { link: '/resources', title: 'RESOURCES' },
        { link: '/forum', title: 'FORUM' },
        { link: '/translate', title: 'TRANSLATE' },
    ];
    const { user, logout } = useContext(UserContext);
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
                        <Link href="/"><b><a>NERCHUKO</a></b></Link>
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
                                <Button type="primary" block>
                                    <Link href="/login"><a>Login</a></Link>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </>
    )
};

export default AppHeader;