import { Col, Container, Row } from "react-bootstrap"

const SectionAboutUs = () => {
    return (
        <>
            <section className="s_about_us">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7} md={7} md={12}>
                            <h3 className="mb-3">WHO WE ARE</h3>
                            <p className="mb-5">Medicare, a part of the U.S. Department of Health and Human Services, is the nation’s medical research agency — making important discoveries that improve health and save lives.</p>
                            
                            <h3 className="mb-3">Funding for Research</h3>
                            <p className="mb-5">Medicare is the largest source of funding for medical research in the world, creating hundreds of thousands of high-quality jobs.</p>
                            
                            <h3 className="mb-3">Labs at Medicare</h3>
                            <p className="mb-5">Scientists conduct research on Medicare campuses across the U.S., as part of our Intramural Research Program.</p>
                            
                            <h3 className="mb-3">Training at Medicare</h3>
                            <p className="mb-5">Medicare provides training opportunities internally, as well as at universities and other institutions across the U.S.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    ) 
}


export default SectionAboutUs