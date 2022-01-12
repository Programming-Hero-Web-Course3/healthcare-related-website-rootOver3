import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Stack, Button } from 'react-bootstrap'
import React from 'react'


const ContactForm = () => { 
    return (
        <>
            <div className="contact-form">
                <Formik
                initialValues={{name:'', email:'', subject:'', message:""}}
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
                    if ( !values.message) {
                        errors.message = "Required"
                    }

                    return errors;
                  }}
                  onSubmit={values=> console.log(values)}
                >
                    {({values}) => (
                        <Form>
                            <Stack className="mb-3" direction="vertical">
                                <label className="mb-1" htmlFor="name" className="mb-1">Name</label>
                                <Field type="text" name="name" placeholder="Jhon Doe" />
                                <ErrorMessage name="name" className="text-red" component="p" />
                            </Stack>

                            <Stack className="mb-3" direction="vertical">
                                <label className="mb-1" htmlFor="email">Email</label>
                                <Field type="email" name="email" placeholder="example@mail.com" />
                                <ErrorMessage name="email" className="text-red" component="p" />
                            </Stack>
                            
                            <Stack className="mb-3" direction="vertical">
                                <label className="mb-1" htmlFor="subject">Subject</label>
                                <Field type="text" name="subject" placeholder="Subject" />
                            </Stack>
                        
                            <Stack className="mb-3" direction="vertical">
                                <label className="mb-1" htmlFor="message">Message</label>
                                <Field component="textarea" name="message" placeholder="Write your message here..." />
                                <ErrorMessage name="message" className="text-red" component="p" />
                            </Stack>
                            <Button type="submit" className="bg-black border-white " variant="custom">Submit</Button>
                        </Form>
                    )}
                        
                </Formik>
            </div>
        </>
    )
}

export default ContactForm
