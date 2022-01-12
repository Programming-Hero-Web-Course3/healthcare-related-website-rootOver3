import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Col, Container, Row, Stack, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const Register = () => {
    const navigate = useNavigate()

    const { 
        user,
        message,
        signupWithFormHandler,
        signinWith0Handler
     } = useAuth()


    return (
        <>
            { user.email && navigate('/')}
            { !user.email && <>
                    <section className="s_login">
                    <Container>
                        <div className="login_Content">
                            <Row className="justify-content-center">
                                <Col lg={5} md={5} sm={12}>
                                    <Formik 
                                    initialValues={{email: '', password: ''}}
                                    validate={values => {
                                        const errors = {};
                    
                                        // Error: Email
                                        if (!values.email) {
                                        errors.email = 'Required';
                                        } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                        errors.email = 'Invalid email address';
                                        }
                    
                                        // Error: Message 
                                        if ( !values.password) {
                                            errors.password = "Required"
                                        }
                    
                                        return errors;
                                    }}
                                    onSubmit={values => signupWithFormHandler(values)}
                                    >
                                        {({values}) => (

                                            <Form>
                                                <h1 className="mb-4">Register new account</h1>

                                                {message && <>
                                                    <div className="message-box text-light bg-custom p-3 mt-3 mb-4">
                                                        {message && <p>{message}</p>}
                                                    </div>
                                                </>}
                                                    
                                                <Stack className="mb-3" direction="vertical">
                                                    <label className="mb-1" htmlFor="email">Email</label>
                                                    <Field type="email" name="email" placeholder="example@mail.com" />
                                                    <ErrorMessage name="email" className="text-red" component="p" />
                                                </Stack>
                                                
                                                <Stack className="mb-3" direction="vertical">
                                                    <label className="mb-1" htmlFor="password">Password</label>
                                                    <Field type="password" name="password" placeholder="Password" />
                                                    <ErrorMessage name="password" className="text-red" component="p" />
                                                </Stack>

                                                <Button type="submit" className="bg-black border-white w-100" variant="custom">Register</Button>
                                            </Form>
                                        )}
                                    </Formik>

                                    <div className="d_0_auth mb-4">
                                        <Button className="btn bg-primary border-white w-100 mt-3" variant="custom" onClick={() => signinWith0Handler('google')}>Google</Button>
                                    </div>

                                    <div className="link">
                                        Have an old account? <Link to="/login">login</Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </>}
            
        </>
    )
}

export default Register
