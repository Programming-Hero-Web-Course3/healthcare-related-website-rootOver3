import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {servicesDB} from '../../../db/servicesDB'


const SectionServices = () => {
    return (
        <section className="s_services">
            <div className="">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="s_title mb-5">At Medicare, <br/>Our Top Services</h2>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    {/* Left Side */}
                    { servicesDB && servicesDB.map( service => <>
                        <Col xl={4} lg={4} md={6} sm={6} key={service?._id}>  
                            <div className="service-card mb-5">
                                <img variant="top" className="mb-4" src={service?.img}/>
                                <div>
                                    <h4>{service.title}</h4>
                                    <p>{service?.description}</p>
                                </div>
                                    
                                <p className="link">
                                    <Link className="btn btn-custom" to={`/services/${service?._id}`}>Learn more</Link>
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
