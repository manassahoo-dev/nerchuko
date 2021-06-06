import { Button, Col, Layout, Row, Typography } from 'antd';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import VocabularyIndex from './[languages]/vocabulary/index';

const { Content } = Layout;
const { Title } = Typography;

const Home = ({ resolution }) => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (session && session.user.email === process.env.NEXT_PUBLIC_ADMIN_MAIL) {
    router.push('/admin');
  }

  const isMobile = resolution.isMobile;

  return (
    <main>
      <Layout>
        <Content>
          <Row justify="center" align="middle" gutter={[16, 32]}>
            <Col xs={24} sm={12} >
              <Title className="m0">Learn Telugu</Title>
              <Title level={2} className="m0 fw-100">The best new way to learn a language.</Title>
              <br />
              <Link href="/accounts/signup"><a><Button type="primary">START LEARNING</Button></a></Link>
              <Button size="large" type="primary"></Button>
            </Col>
            <Col xs={24} sm={12}>
              <img src="/images/banner.webp" alt="Banner" className="mw-100" />
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
