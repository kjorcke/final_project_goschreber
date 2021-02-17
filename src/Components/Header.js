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
          {/*   <Navbar.Brand href="#home">
                <img
                    src="../assets/carrotbrand.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand> */}    
            <Navbar.Brand href="/"><h4 className="text-danger"><strong>GO SCHREBER</strong></h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
                <Nav>
                    <Nav.Item  className="ml-6">
                        <NavLink to='/'><Button className="mr-3" variant="success">Vereine</Button></NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <NavLink to="/frei"><Button className="mr-3" variant="success">Freie Gärten</Button></NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <NavLink to="/inserieren"><Button className="mr-3" variant="success">Anzeige aufgeben</Button></NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <NavLink to="/verwalten"><Button className="mr-3" variant="success">Anzeigen verwalten</Button></NavLink>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <NavLink to="/merken"><Button variant="success">Merkliste</Button></NavLink>
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
