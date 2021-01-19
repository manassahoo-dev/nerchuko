import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function Home() {

  const categories = [
    { name: "Family and Relatives", image: 'https://ouch-cdn.icons8.com/preview/90/49614dde-8a22-496a-93f7-9e5fb23c081b.png' },
    { name: "Days", image: 'https://ouch-cdn.icons8.com/preview/263/59d8ad6b-a9ec-4844-8a1f-c8ca07094043.png' },
    { name: "Colors", image: 'https://ouch-cdn.icons8.com/preview/164/60ebe30b-5a59-4380-97b3-95b1b62268cd.png' }
  ];

  const imgStyle = {
    height: '100px',
    width: 'auto',
  }

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Row gutter={[16, 16]}>
        {categories.map((category, key) =>
          <Col xs={24} sm={8} key={key}>
            <Card hoverable>            
            <Row align="middle">
              <Col span={8}><img style={imgStyle} alt={category.name} src={category.image} /></Col>
              <Col span={16}><Meta title={category.name} description="10 words" /></Col>
            </Row>
            </Card>
          </Col>
        )}
      </Row>
    </main>
  )
}
