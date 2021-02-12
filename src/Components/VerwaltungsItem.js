import React from 'react';
import {Container, Col, Row, Card, Button} from "react-bootstrap";
import axios from 'axios';

function VerwaltungsItem({anzeige}) {

    const id = anzeige._id
    console.log(id)

    function handleDelete(id){
        axios
        .delete('http://localhost:5000/anzeigens/'+id)
        .then(res => console.log(res.data))
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Card className="mb-1" style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{anzeige.titel}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{anzeige.beschreibung}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{anzeige.preis}€</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">{anzeige.gartenqm}qm</Card.Subtitle> 
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Button onClick={() => handleDelete(anzeige._id)} variant="success">Löschen</Button>
                <Button /* onClick={handleEdit} */ variant="success">Bearbeiten</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default VerwaltungsItem
