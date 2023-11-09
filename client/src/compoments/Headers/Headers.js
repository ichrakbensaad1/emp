import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>



        </Container>
      </Navbar>
    </>
  )
}

export default Headers
