import { Card, Layout, Row, Col, List, Avatar, Skeleton, Typography } from 'antd';

import Topics from './topics/index'

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;
export default function Home() {

  const imgStyle = {
    height: '75px',
    width: 'auto',
    maxWidth: '100%'
  }

  return (
    <main>
      <Title level={3}>Learn Telugu</Title>
      <Topics />
    </main>
  )
}
