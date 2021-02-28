import Link from 'next/link'
import { Layout, Space, Row, Col } from 'antd';
const { Footer } = Layout;

const AppFooter = () => {
  const links = [
    { link: '/privacy', title: 'Privacy Policy' },
    { link: '/terms', title: 'Terms of Service' },
    { link: '/sitemap', title: 'Sitemap' },
  ];
  return (
    <Footer>
      <Row>
        <Col xs={24} sm={8}>
          <Link href="/"><a>© nerchuko.in</a></Link>
        </Col>
        <Col xs={24} sm={16}>
          <Row justify="end">
            <Col>
              <Space size="middle">
                {links.map((link, key) =>
                  <Link href={link.link} key={key}>
                    <a>{link.title}</a>
                  </Link>
                )}
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer >
  )
};

export default AppFooter;