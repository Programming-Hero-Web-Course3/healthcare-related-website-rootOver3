import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {newsDB} from '../../../db/newsDB'


const SectionNews = () => {
    return (
        <section className="s_news">
            <div className="">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="s_title mb-5">In the news</h2>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    {/* Left Side */}
                    { newsDB && newsDB.map( news => <>
                        <Col xl={3} lg={3} md={6} sm={6} xs={12} key={news?._id}>  
                            <Card className="news-card mb-5">
                                <Card.Img variant="top" src={news.img}/>
                                <Card.Body>
                                    <div>
                                        <Card.Title>{news.title}</Card.Title>
                                        <Card.Text>{news?.description}</Card.Text>
                                    </div>
                                    
                                    <p className="link">
                                        <Link to={`/news/${news?._id}`}>Learn more</Link>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>)}
                        
                </Row>
            </Container>
        </section>
    )
}

export default SectionNews
