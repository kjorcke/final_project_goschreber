import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup} from "react-bootstrap";
import { GeoAltFill, Heart, HeartFill, Envelope, Telephone, PersonCircle } from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';

function FavoritenFreiItem({merkClick, freigarten, merkFreiItems}) {


    const isMerkFrei = () => {
        return merkFreiItems.find((el) => el._id === freigarten._id) ? true : false
    }

    return (
        <Container>
                <Row>
                <Card border="success" className="mb-1">
                <ListGroup className="m=1">
                    <ListGroup.Item>
                    <p className="mb-2 text-muted"><GeoAltFill className="mr-1" color="green" size={12}/>{freigarten.kgv.kgvname}</p>
                    <Card.Title>{freigarten.titel}</Card.Title>
                    <p className="mb-2 text-muted row-3 text-truncate">{freigarten.beschreibung}</p>
                    <h5 className="text-success"><strong>{freigarten.preis}€</strong></h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Subtitle className="mb-2"><PersonCircle className="mr-3"color="green" size={17}/>{freigarten.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2"><Envelope className="mr-3" color="green" size={17}/>{freigarten.email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2"><Telephone className="mr-3" color="green" size={17}/>{freigarten.telefon}</Card.Subtitle>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <NavLink to={`/frei/${freigarten._id}`}>
                            <Button size="sm" className="mr-2" variant="outline-danger">Details</Button>
                        </NavLink>
                        <Button onClick={merkClick} size="sm" className="mr-2 " variant='outline-danger'>
                            {isMerkFrei()? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                            {isMerkFrei() ? 'Entfernen' : 'Merken'}
                        </Button>
                        <Button size="sm" className="mr-2" variant="outline-danger">Teilen</Button> 
                    </ListGroup.Item>
                </ListGroup>
                   {/*  <Card.Body className="m-1">
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
                        <Row>
                        <Card.Subtitle className="mb-2"><PersonCircle className="mr-3"color="green" size={17}/>{freigarten.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2"><Envelope className="mr-3" color="green" size={17}/>{freigarten.email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2"><Telephone className="mr-3" color="green" size={17}/>{freigarten.telefon}</Card.Subtitle>
                        </Row>
                        <Row>
                            <NavLink to={`/frei/${freigarten._id}`}>
                                <Button size="sm" className="mr-2" variant="outline-danger">Details</Button>
                            </NavLink>
                            <Button onClick={merkClick} size="sm" className="mr-2 " variant='outline-danger'>
                            {isMerkFrei()? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                            {isMerkFrei() ? 'Entfernen' : 'Merken'}
                        </Button>
                            <Button size="sm" className="mr-2" variant="outline-danger">Teilen</Button>     
                        </Row>
                      
                    </Card.Body> */}
                </Card>
            </Row>
        </Container>
    )
}

export default FavoritenFreiItem
