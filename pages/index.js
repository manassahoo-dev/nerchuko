import { Card, Layout, Row, Col, List, Avatar, Skeleton, Typography } from 'antd';

import Topics from './topics/index'

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;
export default function Home() {

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Topics />
    </main>
  )
}
