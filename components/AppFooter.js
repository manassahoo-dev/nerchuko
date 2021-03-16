import { Col, Collapse, Layout, Row, Typography } from 'antd';
import Link from 'next/link';
import { BsBoxArrowUpRight } from "react-icons/bs";
const { Footer } = Layout;
const { Text } = Typography;
const { Panel } = Collapse;

const AppFooter = (props) => {
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
          {links.map((item, index) => <Col xs={0} sm={6} key={index}>
            <h3>{item.name}</h3>
            {item.links.map((link, index) =>
              <section key={index}>
                {
                  item.name === 'Connect with Us' ?
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      <h5><Text type="secondary">{link.title}&nbsp;<BsBoxArrowUpRight /></Text></h5>
                    </a>
                    :
                    <Link key={index} href={link.link}>
                      <a>
                        <h5><Text type="secondary">{link.title}</Text></h5>
                      </a>
                    </Link>
                }
              </section>
            )}
          </Col>)}
        </Row>
        <Row>
          <Col xs={24} sm={0}>
            <Collapse bordered={false} style={{ backgroundColor: '#f1f1f1' }}>
              {links.map((item, index) =>
                <Panel header={item.name} key={index} showArrow={false}>
                  {item.links.map((link, index) =>
                    <section key={index}>
                      {
                        item.name === 'Connect with Us' ?
                          <a href={link.link} target="_blank" rel="noopener noreferrer">
                            <h5><Text type="secondary">{link.title}&nbsp;<BsBoxArrowUpRight /></Text></h5>
                          </a>
                          :
                          <Link key={index} href={link.link}>
                            <a>
                              <h5><Text type="secondary">{link.title}</Text></h5>
                            </a>
                          </Link>
                      }
                    </section>
                  )}
                </Panel>
              )}

            </Collapse>
          </Col>
        </Row>
      </Footer >
      <Footer style={{ background: '#ececec' }}>
        <Link href="/"><a>© nerchuko.in, All rights reserved.</a></Link>
      </Footer>
    </>
  )
};

export default AppFooter;