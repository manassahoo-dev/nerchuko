import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Books = (props) => {
    const router = useRouter()
    const [phrases, setPhrases] = useState(null);
    const [topicName, setTopicName] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router) {
            const { id } = router.query;
            if (id) {
                setTopicName(id);
            }
        }
    }, [topicName]);

    return (
        <>
            {topicName}
        </>
    )
}
export default Books;