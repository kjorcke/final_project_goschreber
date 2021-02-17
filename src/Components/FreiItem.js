import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { GeoAltFill, Heart, HeartFill } from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';



function FreiItem({freigarten, merkClick, merkFreiItems}) {

    const isMerkFrei = () => {
        return merkFreiItems.find((el) => el._id === freigarten._id) ? true : false
      }

    return (
            <Container>
                <Row>
                <Card border="success" className="mb-1" style={{ width: '26rem' }}>
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
    
                        <Row>
                            <NavLink to={`/frei/${freigarten._id}`}>
                                <Button size="sm" className="mr-2" variant="outline-danger">Details</Button>
                            </NavLink>
                            <Button onClick={merkClick} size="sm" className="mr-2 " variant='outline-danger'>
                            {isMerkFrei()? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                            {isMerkFrei()? 'Entfernen' : 'Merken'}
                        </Button>
                            <Button size="sm" className="mr-2" variant="outline-danger">Teilen</Button>     
                        </Row>
                      
                    </Card.Body>
                </Card>
            </Row>
        </Container>
        
      
    )
}

export default FreiItem
