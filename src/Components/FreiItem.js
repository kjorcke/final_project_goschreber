import React from 'react';
import {Card, Button} from "react-bootstrap";



function FreiItem({freigarten}) {
    return (
        <Card className="mb-1" style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>{freigarten.titel}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{freigarten.beschreibung}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{freigarten.preis}€</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{freigarten.gartenqm}qm</Card.Subtitle>
                
            </Card.Body>
        </Card>
    )
}

export default FreiItem
