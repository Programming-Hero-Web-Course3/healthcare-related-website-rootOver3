import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <section className="error-404">
            <Container>
                <div className="section-container">
                    <h1 className="s_title mb-4">Opps! <br/>Error Code: 404</h1>
                    <p>Please make sure you're in the right address. </p>

                    <p className="link">
                        <Link className="btn btn-custom btn-custom bg-primary" to={`/`}>
                            Get back to homepage
                        </Link>
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default Error404
