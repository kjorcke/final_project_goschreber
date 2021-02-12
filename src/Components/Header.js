import React from 'react';
import { Container, Row, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Header() {


    return (
        
        <Navbar bg="sucess" expand="xl">
        <Navbar.Brand href="#">Go Schreber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
                <Form inline className="mr-2">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-center" fill variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">Vereine</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/frei" eventKey="link-1">Freie Gärten</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav >
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/inserieren"><Button variant="success">Anzeige aufgeben</Button></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-6">
                        <Nav.Link href="/verwalten"><Button variant="success">Anzeigen verwalten</Button></Nav.Link>
                    </Nav.Item>
                </Nav>
                
        </Navbar.Collapse>
    </Navbar>
      
    )

}

export default Header
