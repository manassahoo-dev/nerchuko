import { Col, Layout, Row, Typography } from 'antd';
import Link from 'next/link';
import { BsBoxArrowUpRight } from "react-icons/bs";
const { Footer } = Layout;
const { Text } = Typography;

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
          {links.map((item, index) => <Col xs={12} sm={6} key={index}>
            <h3>{item.name}</h3>
            {item.links.map((link, index) =>
              <Link key={index} href={link.link}>
                <a target={item.name === 'Connect with Us' ? "_blank" : "_self"}>
                  <h5><Text type="secondary">{link.title}&nbsp;{item.name === 'Connect with Us' && <BsBoxArrowUpRight />}</Text></h5>
                </a>
              </Link>
            )}
          </Col>)}
        </Row>
      </Footer >
      <Footer style={{ background: '#ececec' }}>
        <Link href="/"><a>© nerchuko.in</a></Link>
      </Footer>
    </>
  )
};

export default AppFooter;