import { Typography } from 'antd';
import { useRouter } from "next/router";

const { Title } = Typography;

export default function Vowels() {
    const router = useRouter();
    const languages = router.query.languages;
    return <div>
        {languages}
        <Title>Vowels (అచ్చులు atchulu)</Title>
    </div>;
}