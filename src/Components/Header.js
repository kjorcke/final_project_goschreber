import React from 'react';
import { Container, Col, Row, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import  carrot from '../assets/carrot.png';
import { NavLink } from 'react-router-dom';

function Header() {


    return (
        <Container fluid>
            <Row>
                <Col>
            <Navbar expand="sm">
        
                <img
                    src={carrot}
                    width="35"
                    height="35"
                    /* className="d-inline-block" */
                    alt="React Bootstrap logo"
                />
            
            <h4 className="text-danger mt-2"><strong>GO SCHREBER</strong></h4>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                <Nav>
                    <Nav.Item  className="ml-6">
                        <Nav.Link href='/'><Button className="mr-1" variant="success">Vereine</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/frei"><Button className="mr-1" variant="success">Freie Gärten</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/inserieren"><Button className="mr-1" variant="success">Anzeige aufgeben</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/verwalten"><Button className="mr-1" variant="success">Anzeigen verwalten</Button></Nav.Link>
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
