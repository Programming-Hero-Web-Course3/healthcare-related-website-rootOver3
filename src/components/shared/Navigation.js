import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const Navigation = () => {
    const { user, signoutHandler } = useAuth()

    return (
        <header>
            {/* <Navbar className="navbar-secondery" bg="custom" variant="dark">
                <Container>
                    <Nav className="mr-auto">
                        <Nav.Link href="mailto:example@email.com">example@email.com</Nav.Link> 
                        <Nav.Link href="tel:+88001234-56789">(+880) 01234-56789</Nav.Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Nav.Link href={`/login`}>Login</Nav.Link>
                        <Nav.Link href={`/register`}>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            <Navbar className="navbar-primary" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href={`/`}>Medicare</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-primary" />
                    
                    <Navbar.Collapse id="navbar-primary">
                        <Nav className="mx-auto">
                            <Nav.Link href={`/`}>Home</Nav.Link>
                            <Nav.Link href={`/about`}>About</Nav.Link>
                            <Nav.Link href={`/services`}>Services</Nav.Link>
                            <Nav.Link href={`/contact`}>Contact</Nav.Link>
                        </Nav>
                        
                        <Nav className="user-profile">
                            { !user.email && <>
                                <Nav.Link href={`/login`}>Login</Nav.Link>
                                <Nav.Link href={`/register`}>Register</Nav.Link>
                            </>}
                            {user.email && <>
                                <Navbar.Text>
                                    Signed in as: {user?.displayName?user?.displayName:'Nameless'} | 
                                </Navbar.Text>
                                <Nav.Link onClick={ () => signoutHandler()}>Sign out</Nav.Link>
                                
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation
