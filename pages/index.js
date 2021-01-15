import { Typography, Row, Col, Card } from 'antd';

const { Title } = Typography;
export default function Home() {

  const categories = [
    "Adjectives", "Nouns", "Plural", "Gender", "Numbers", "Phrases", "Grammar", "Vocabulary"]

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Row gutter={[16, 16]}>
        {categories.map((category, key) =>
          <Col xs={12} sm={6} key={key}>
            <Card>
              {category}
            </Card>
          </Col>
        )}
      </Row>
    </main>
  )
}
