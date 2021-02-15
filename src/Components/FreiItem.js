import React from 'react';
import {Container, Row, Card, Button} from "react-bootstrap";
import { GeoAltFill } from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';



function FreiItem({freigarten}) {
    return (
        <NavLink to={`/frei/${freigarten._id}`}>
            <Container>
                <Row>
                <Card border="success" className="mb-1">
                    <Card.Body className="m-1">
                        <Row>
                        <p className="mb-2 text-muted"><GeoAltFill className="mr-1" color="green" size={12}/>{freigarten.kgv.kgvname}</p>
                        </Row>
                        <Row>
                            <Card.Title>{freigarten.titel}</Card.Title>
                        </Row>
                         <Row>
                            <p className="mb-2 text-muted row-3 text-truncate">{freigarten.beschreibung}</p>
                         </Row>
                        <Row>
                            <h5 className="text-success"><strong>{freigarten.preis}€</strong></h5>
                        </Row>
                         <Row >
                            <Button size="sm" className="mr-1" variant="outline-danger">Merken</Button>
                            <Button size="sm" className="mr-1" variant="outline-danger">Teilen</Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        </NavLink>
        
      
    )
}

export default FreiItem
