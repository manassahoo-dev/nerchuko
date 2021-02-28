import { Breadcrumb, Card, Col, Row } from 'antd';
import Link from 'next/link';
export default function Translate() {
    const options = [
        { name: "Google Translate", url: "https://translate.google.com/?sl=en&tl=te&op=translate" },
        { name: "Microsoft Translate", url: "https://www.bing.com/translator" },
    ]
    return <>
        <Breadcrumb>
            <Breadcrumb.Item><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
            <Breadcrumb.Item>Translate</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <h1 className="my-4">Translate</h1>
        <Row>

            {options.map((option, index) => <Col span={12} key={index}>
                <Card title={option.name} extra={<a href={option.url} target="_blank">More</a>}>
                </Card>
            </Col>)}
        </Row>
    </>
}