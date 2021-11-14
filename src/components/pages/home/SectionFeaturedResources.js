import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {featuredResourcesDB} from '../../../db/featuredResourcesDB'


const SectionFeaturedResources = () => {
    return (
        <section className="s_featured_resources" key="s_featured_resources">
            <div className="">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="s_title mb-5">Featured Resources & Initiatives</h2>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    {/* Left Side */}
                    { featuredResourcesDB && featuredResourcesDB.map( fResource => <>
                        <Col lg={3} md={3} sm={12} key={fResource?._id}>  
                            <div className="service-card mb-5">
                                <div className="mb-auto">
                                    <h4>{fResource.title}</h4>
                                    <p>{fResource?.description}</p>
                                </div>

                                <p className="link">
                                    <Link to={`/resources/${fResource?._id}`}>Learn more</Link>
                                </p>
                            </div>
                        </Col>
                    </>)}
                        
                </Row>
            </Container>
        </section>
    )
}

export default SectionFeaturedResources
