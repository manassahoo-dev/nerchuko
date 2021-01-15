import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function Home() {

  const categories = [
    "Adjectives", "Nouns", "Plural", "Gender", "Numbers", "Phrases", "Grammar", "Vocabulary"]

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Row gutter={[16, 16]}>
        {categories.map((category, key) =>
          <Col xs={12} sm={6} key={key}>
            <Card hoverable>
              <Meta title={category} description="10 words" />
            </Card>
          </Col>
        )}
      </Row>
    </main>
  )
}
