import React, {useState} from 'react';
import {Container, Col, Row, Card, Button} from "react-bootstrap";
import { GeoAltFill, Heart, HeartFill } from 'react-bootstrap-icons';
import axios from 'axios';
import {NavLink} from 'react-router-dom';



function VerwaltungsItem({eigAnzeige, setOwnAnzeige, ownAnzeige}) {
  

    const id = eigAnzeige._id
    const [deleted, setDeleted] = useState(false)
    
    
    function handleDelete () {
        axios
        .delete('https://goschreber.herokuapp.com/anzeigens/'+id)
        .then((res) => {console.log(res);
                        setDeleted(true);
        })
      }
    

    return (
        <Container fluid>
        <Row className="justify-content-md-center mt-5">
            <Col xs={4}>
            {deleted ?
            <Card border="success" className="mb-1">
                <Card.Body className="m-1">
                    <Row>
                        <Card.Title>Anzeige gelöscht</Card.Title>
                    </Row>
                </Card.Body>
            </Card>
               :      
            <Card border="success" className="mb-1">
                <Card.Body className="m-1">
                    <Row>
                    <p className="mb-2 text-muted"><GeoAltFill className="mr-1" color="green" size={12}/>{eigAnzeige.kgv?.kgvname}</p>
                    </Row>
                    <Row>
                        <Card.Title>{eigAnzeige.titel}</Card.Title>
                    </Row>
                    <Row>
                        <p className="mb-2 text-muted row-3 text-truncate">{eigAnzeige.beschreibung}</p>
                    </Row>
                    <Row>
                        <h5 className="text-success"><strong>{eigAnzeige.preis}€</strong></h5>
                    </Row>

                    <Row>
                        <Button onClick={handleDelete} size="sm" className="mr-4" variant="success">Löschen</Button>
                        <Button size="sm" className="mr-2" variant="success">Bearbeiten</Button>
                        <NavLink to={`/frei/${eigAnzeige._id}`}>
                                <Button size="sm" className="mr-2" variant="outline-danger">Details</Button>
                        </NavLink>
                    </Row>
                </Card.Body>
            </Card>}
        </Col>
    </Row>
</Container>
    )
}

export default VerwaltungsItem
