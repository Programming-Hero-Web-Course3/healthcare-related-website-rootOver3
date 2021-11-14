import { Row, Col, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionAbout = () => {
    return (
        <section className="s_about">
            <Container>
                <Row>
                    {/* Left Side */}
                    <Col lg={5} md={5} sm={12}>
                        <div className="about_left d-flex flex-column h-100 justify-content-center">
                            <Image src={`/img/p1.jpg`} className="w-full" />
                        </div>
                    </Col>

                    {/* Right Side */}
                    <Col lg={{span: 6, offset: 1}} md={6} sm={12}>  
                        <div className="about_right d-flex flex-column h-100 justify-content-center">
                            <h2 className="s_title mb-2">Better Information <br/>Better Health</h2>
                            <p className="w-75 mb-3 ml-auto">When you visit Medicare, you’ll gain access to advanced technology, treatments and research that may not be available elsewhere. You can feel confident that you’re being treated by world-renowned experts.</p>

                            <ul className="list">
                                <li>Advanced technology & treatments.</li>
                                <li>World class services & support.</li>
                                <li>24/7 under supervision.</li>
                            </ul>
                            <p className="link">
                                <Link to={`/about`}>Know more about us</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionAbout
