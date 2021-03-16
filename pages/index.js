import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import Topics from './topics/index';

const { Title } = Typography;
const Home = ({ resolution }) => {
  const isMobile = resolution.isMobile;
  return (
    <main>
      <Row justify="center" align="middle" gutter={[16, 32]}>
        <Col xs={24} sm={12} className="text-center">
          <Title>Learn Telugu</Title>
          <Title level={5}>The best new way to learn a language.</Title>
          <Space>
            <Button size="large" type="primary">START LEARNING</Button>
          </Space>
        </Col>
        <Col xs={24} sm={12}>
          <img style={{ maxWidth: '100%' }} src="/images/banner.png" alt="Banner" />
        </Col>
      </Row>
      <br />
      <Topics />
    </main >
  )
}
export default Home;
