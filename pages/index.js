import { Button, Col, Layout, Row, Typography } from 'antd';
import Topics from './topics/index';

const { Content } = Layout;
const { Title } = Typography;

const Home = ({ resolution }) => {
  const isMobile = resolution.isMobile;
  return (
    <main>
      <Layout>
        <Content>
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
        </Content>
      </Layout>
      <Content style={{ backgroundColor: '#eaeaea' }}>
        <Title className="m1">Learn Telugu Vocabulary</Title>
        <Topics />
      </Content>
    </main >
  )
}
export default Home;
