import { Col, Layout, Row } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;

const AppFooter = () => {
  const links = [
    {
      name: 'Privacy & Terms',
      links: [
        { link: '/privacy', title: 'Privacy Policy' },
        { link: '/terms', title: 'Terms of Service' },
        { link: '/sitemap', title: 'Sitemap' }
      ]
    },
    {
      name: 'Connect with Us',
      links: [
        { link: 'https://www.facebook.com/telugu.nerchuko', title: 'Facebook Page' },
        { link: 'https://www.facebook.com/groups/nerchuko', title: 'Facebook Group' },
        { link: 'https://www.instagram.com/telugu.nerchuko', title: 'Instagram' },
        { link: 'https://pinterest.com/nerchuko', title: 'Pinterest' }
      ]
    }
  ];
  return (
    <>
      <Footer>
        <Row>
          {links.map((item, index) => <Col span={6} key={index}>
            <h3>{item.name}</h3>
            {item.links.map((link, index) =>
              <Link key={index} href={link.link}><a target={item.name === 'Social' && "_blank"}><h5>{link.title}</h5></a></Link>
            )}
          </Col>)}
        </Row>
      </Footer >
      <Link href="/"><a>© nerchuko.in</a></Link>
    </>
  )
};

export default AppFooter;