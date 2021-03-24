import { Card, Col, Rate, Row } from 'antd';
import Link from 'next/link';

const { Meta } = Card;
export default function BooksIndex() {
    const books = [
        {
            name: 'Learn Telugu through English',
            author: 'Krishna Gopal Vikal',
            pages: 160,
            reviews: 3.5,
            ISBN10: 8128811886,
            ISBN13: '978-8128811883',
            image: 'https://images-na.ssl-images-amazon.com/images/I/41dADkCMIxL.jpg'
        },
        {
            name: 'Spoken Telugu for absolute beginners',
            author: 'Sanjay D',
            pages: 249,
            reviews: 4.3,
            ISBN10: 9353618967,
            ISBN13: '978-9353618964',
            image: 'https://images-na.ssl-images-amazon.com/images/I/6177AhOTMvL.jpg'
        },
        {
            name: 'Learn Telugu Through Hindi',
            author: 'Kalahasti Gaurinath',
            pages: 272,
            reviews: 4.1,
            ISBN10: 9350570769,
            ISBN13: '978-9350570760',
            image: 'https://images-na.ssl-images-amazon.com/images/I/615kfphT+0L.jpg'
        }]
    return <>
        <h1>Books</h1>
        <Row gutter={16}>
            {books.map((book, key) =>
                <Col xs={24} sm={12} md={6} key={key}>
                    <Link href={`/resources/books/${book.ISBN10}`}>
                        <a>
                            <Card
                                style={{ background: 'none' }}
                                bordered={false}
                                cover={<img alt={book.name} src={book.image} style={{
                                    maxHeight: 200, padding: 10, margin: 'auto', display: 'block', width: 'auto'
                                }} />}
                            >
                                <Meta title={book.name} description={book.author} />
                                <Rate disabled defaultValue={book.reviews} />
                            </Card>
                        </a>
                    </Link>
                </Col>
            )}
        </Row>
    </>
}