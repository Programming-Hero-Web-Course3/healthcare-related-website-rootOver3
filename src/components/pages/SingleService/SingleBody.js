import { Col, Container, Row } from "react-bootstrap"


const SingleBody = ({data}) => {
    
    return (
        <section className="s_sigle_service">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        {data && <>
                            <p>{data?.description}</p>
                        </>}
                    </Col>
                </Row>
                
            </Container>
        </section> 
    )
}


export default SingleBody