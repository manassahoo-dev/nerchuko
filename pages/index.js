import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import Topics from './topics/index';

const { Title } = Typography;
const Home = ({ resolution }) => {
  const isMobile = resolution.isMobile;
  return (
    <main>
      <Row justify="center" align="middle" gutter={[16, 32]}>
        <Col xs={24} sm={12} className="text-center1">
          <Title className="m0 animate__animated animate__fadeInUp">Learn Telugu</Title>
          <Title level={2} type="secondary" className="m0 fw-100 animate__animated animate__slideInUp">The best new way to learn a language.</Title>
          <br /><Button size="large" type="primary">START LEARNING</Button>
        </Col>
        <Col xs={24} sm={12}>
          <img style={{ maxWidth: '100%' }} src="/images/banner.webp" alt="Banner" />
        </Col>
      </Row>
      <br />
      <Topics />
    </main >
  )
}
export default Home;
