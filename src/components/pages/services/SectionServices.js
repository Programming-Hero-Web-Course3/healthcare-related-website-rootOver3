import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {servicesDB} from '../../../db/servicesDB'


const SectionServices = () => {
    return (
        <section className="s_services">
            <Container>
                <Row>
                    {/* Left Side */}
                    { servicesDB && servicesDB.map( service => <>
                        <Col lg={4} md={4} sm={6} key={service?._id}>  
                            <div className="service-card mb-5">
                                <h4>{service.title}</h4>
                                <p>{service?.description}</p>
                                
                                <p className="link">
                                    <Link to={`/services/${service?._id}`}>Learn more</Link>
                                </p>
                            </div>
                        </Col>
                    </>)}
                        
                </Row>
            </Container>
        </section>
    )
}

export default SectionServices
