import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import Topics from './topics/index';

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;
export default function Home() {

  return (
    <main>
      <Row>
        <Col xs={24} sm={12}>
          <Title>Learn Telugu</Title>
          <Title level={5}>The best new way to learn a language.</Title>
          <Space>
            <Button size="large" shape="round">GET STARTED</Button>
            <Button size="large" type="primary" shape="round">ALREADY HAVE AN ACCOUNT</Button>
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
