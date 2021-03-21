import { Typography } from 'antd';
import { useRouter } from "next/router";

const { Title } = Typography;

export default function Alphabets() {
    const router = useRouter();
    const languages = router.query.languages;

    return <div>
        <Title>{languages} Alphabets</Title>
    </div>;
}