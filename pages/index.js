import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import Topics from './topics/index';

const { Title } = Typography;
const Home = () => {
  return (
    <main>
      <Row justify="center" align="middle">
        <Col xs={24} sm={12}>
          <Title>Learn Telugu</Title>
          <Title level={5}>The best new way to learn a language.</Title>
          <Space>
            <Button size="large" type="primary">START LEARNING</Button>
          </Space>
        </Col>
        <Col xs={24} sm={12}>
          <img style={{ maxWidth: '100%' }} src="/images/banner.png" />
        </Col>
      </Row>
      <Topics />
    </main>
  )
}
export default Home;
