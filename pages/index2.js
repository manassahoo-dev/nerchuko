import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function Home() {

  const categories = [
    { "id": 1, "name": "Greetings", "imageUrl": "https://image.flaticon.com/icons/svg/1006/1006555.svg" },
    { "id": 2, "name": "Numbers", "imageUrl": "https://image.flaticon.com/icons/svg/2890/2890747.svg" },
    { "id": 3, "name": "Family", "imageUrl": "https://image.flaticon.com/icons/svg/2219/2219802.svg" },
    { "id": 4, "name": "Vegetables", "imageUrl": "https://image.flaticon.com/icons/svg/2921/2921855.svg" },
    { "id": 5, "name": "Fruits", "imageUrl": "https://image.flaticon.com/icons/svg/2224/2224249.svg" },
    { "id": 6, "name": "Colors", "imageUrl": "https://image.flaticon.com/icons/svg/1831/1831908.svg" },
    { "id": 7, "name": "Days", "imageUrl": "https://image.flaticon.com/icons/svg/2922/2922993.svg" }
  ];

  const imgStyle = {
    height: '75px',
    width: 'auto',
    maxWidth: '100%'
  }

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Row gutter={[16, 16]}>
        {categories.map((category, key) =>
          <Col xs={24} sm={8} key={key}>
            <Card hoverable>
              <Row align="middle">
                <Col span={8}><img style={imgStyle} alt={category.name} src={category.imageUrl} /></Col>
                <Col span={16}><Meta title={category.name} description="10 words" /></Col>
              </Row>
            </Card>
          </Col>
        )}
      </Row>
    </main>
  )
}
