import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import Topics from './topics/index';

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;
export default function Home() {

  return (
    <main>
      <Row>
        <Col span={12}>
          <Title>Learn Telugu</Title>
          <Title level={5}>The best new way to learn a language.</Title>
          <Space>
            <Button size="large" shape="round">Get Started</Button>
            <Button size="large" type="primary" shape="round">I Already Have An Account</Button>
          </Space>
        </Col>
        <Col span={12}>
          <img style={{ maxWidth: '100%' }} src="/images/banner.png" />
        </Col>
      </Row>
      <Topics />
    </main>
  )
}
