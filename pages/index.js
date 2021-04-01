import { Button, Col, Layout, Row, Typography } from 'antd';
import Link from 'next/link';
import VocabularyIndex from './[languages]/vocabulary/index';

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
              <Title className="m0">Learn Telugu</Title>
              <Title level={2} type="secondary" className="m0 fw-100 animate__animated animate__slideInUp">The best new way to learn a language.</Title>
              <br />
              <Link href="/signup"><a><Button type="primary">START LEARNING</Button></a></Link>
              <Button size="large" type="primary"></Button>
            </Col>
            <Col xs={24} sm={12}>
              <img src="/images/banner.webp" alt="Banner" className="mw-100 animate__animated animate__headShake" />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Content className="vocabulary-section">
        <Title>Learn Telugu Vocabulary</Title>
        <VocabularyIndex />
      </Content>
    </main >
  )
}
export default Home;
