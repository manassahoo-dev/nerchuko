import { Col, Layout, Row, Typography, Card } from 'antd';
import Link from 'next/link';
import tutors from './tutors.json';
const { Title } = Typography;
const { Content } = Layout;
const { Meta } = Card;

export default function TutorsIndex() {
    return <>
        <Content style={{ background: '#d9ebfa', borderRadius: '2rem' }}>
            <Row justify="center" align="middle" gutter={[16, 32]}>
                <Col xs={24} sm={12} >
                    <Title className="m0">Take Telugu lessons with a private tutor</Title>
                    <Title level={4} className="m0 fw-100">Each lesson is a step towards language proficiency.</Title>
                </Col>
                <Col xs={24} sm={12}>
                    <img src="/images/tutor.webp" alt="Tutor" className="mw-100" />
                </Col>
            </Row>
        </Content>
        <br />
        <Row gutter={[16, 16]}>
            {tutors.map((tutor, key) =>
                <Col xs={24} sm={12} md={6} key={key}>
                    <Link href={`/tutors/${tutor.id}`}><a>
                        <Card hoverable cover={<img alt={tutor.name} src={tutor.picture} height="250" width="auto" />}>
                            <Meta title={tutor.name} description={tutor.description} />
                        </Card>
                    </a></Link>
                </Col>)}
        </Row>
    </>
}