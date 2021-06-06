import { Avatar, Breadcrumb, Card, Col, Row } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import tutors from './tutors.json';

const { Meta } = Card;
const TutorProfile = (props) => {
    const router = useRouter()
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        if (router) {
            const { id } = router.query;
            if (id) {
                setTutor(tutors.find(tutor => tutor.id === id));
            }
        }
    }, [router]);

    return (
        <>
            {tutor &&
                <>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href={`/`}><a>Home</a></Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link href={`/tutors/`}><a>Tutors</a></Link></Breadcrumb.Item>
                        <Breadcrumb.Item>{tutor.name}</Breadcrumb.Item>
                    </Breadcrumb><br />
                    <div>
                        <Card bordered={false}>
                            <Row gutter={[16, 16]}>
                                <Col span={4}>
                                    <Avatar shape="square" size={160} src={tutor.picture} />
                                </Col>
                                <Col span={20}>
                                    <Meta title={tutor.name} description="Aspiring tutor who can teach Telugu in an interesting way." />
                                    <br /><p dangerouslySetInnerHTML={{ __html: tutor.descriptionLong }} />
                                    <a href={tutor.url} target="_blank">{tutor.url}</a>
                                </Col>
                            </Row>
                        </Card>

                    </div>
                </>
            }
        </>
    )
}
export default TutorProfile;