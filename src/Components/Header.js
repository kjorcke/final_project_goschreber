import React from 'react';
import { Container, Col, Row, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Header() {


    return (
        <Container fluid>
            <Row>
                <Col>
            <Navbar expand="xl">
            <Navbar.Brand href="#">Go Schreber</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                <Nav>
                    <Nav.Item  className="ml-6">
                        <Nav.Link eventKey="home" href="/"><Button variant="success">Vereine</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link eventKey="frei" href="/frei"><Button variant="success">Freie Gärten</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/inserieren"><Button variant="success">Anzeige aufgeben</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/verwalten"><Button variant="success">Anzeigen verwalten</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/merken"><Button variant="success">Merkliste</Button></Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar.Collapse>
    </Navbar>
                </Col>
            </Row>
        </Container>
       
      
    )

}

export default Header
