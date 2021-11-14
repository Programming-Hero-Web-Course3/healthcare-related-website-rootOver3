import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from './Form'

const SectionContact = () => {
    return (
        <>
            <section className="s_contact">
                <Container>
                    <Row> 
                        <Col lg={6} md={5} sm={12}>
                            <div className="contact_left w-75">
                                <h4 className="mb-4">Want to meet us?</h4>
                                <h2 className="mb-3">801 Hanan Dr., Nashville, TN 37228</h2>
                                <p>Let us know if you would like to talk to us to the group prayer, and we can offer you a cup of coffee and get to know each other.</p>
                            </div>
                        </Col>

                        <Col lg={5} md={5} sm={12}>
                            <ContactForm/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionContact
