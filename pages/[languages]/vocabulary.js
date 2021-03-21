import { Typography } from 'antd';
import Topics from '../topics/index';

const { Title } = Typography;

export default function Vocabulary() {
    return <>
        <Title level={3}>Vocabulary</Title>
        <Topics />
    </>
}