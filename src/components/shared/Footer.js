import { Link } from 'react-router-dom'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import { footerDB } from '../../db/footerDB'

const Footer = () => {
    return (
        <>
            <footer>
                <Container className="mb-5">
                    <Row>
                        <Col lg={5}>
                            <Stack direction="vertical">
                                <h1 className="mb-3">MEDICARE</h1>
                                <p className="mb-5">Medicare is among the most comprehensive and advanced health care systems in the world.  It is our integrated mission to provide state-of-the-art patient care, to train top medical professionals and to support pioneering research and discovery.</p>
                            </Stack>

                            <Stack className="inline-menu" direction="horizontal">
                                <p className="link">
                                    <Link to={`/`}>Facebook</Link>
                                </p>
                                <p className="link">
                                    <Link to={`/`}>Linked in</Link>
                                </p>
                                <p className="link">
                                     <Link to={`/`}>Twitter</Link>
                                </p>
                               
                            </Stack>
                        </Col>

                        <Col lg={{span: 6, offset: 1}}>
                            <Row>
                                <Col>
                                    <Stack>
                                        <h4 className="mb-4">Patients</h4>

                                        {footerDB[0] && footerDB[0].map(item=> (
                                            <p className="link mb-1" key={item._id}>
                                                <Link to={item?.url}>
                                                    {item?.title}
                                                </Link>
                                            </p>
                                        ))}
                                            
                                    </Stack>
                                </Col>

                                <Col>
                                    <Stack>
                                        <h4 className="mb-4">Get Involved</h4>

                                        {footerDB[1] && footerDB[1].map(item=> (
                                            <p className="link mb-1" key={item._id}>
                                                <Link to={item?.url}>
                                                    {item?.title}
                                                </Link>
                                            </p>
                                        ))}
                                            
                                    </Stack>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Container className="copyright pt-2">
                    <p className="text-center">Copyright 2021. All rights reserved.</p>
                </Container>
            </footer>  
        </>
    )
}

export default Footer
