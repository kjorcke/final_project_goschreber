import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Card, Button} from "react-bootstrap";





function KgvItem({verein, favClick}) {
  
    
    return (
        <Card className="mb-1" style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>{verein.kgvname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{verein.email}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{verein.web}</Card.Subtitle>
                <Button onClick={favClick} size="sm" className="mb-1" variant="primary">Add to Favourites</Button>
                <CopyToClipboard text={verein.email}>
                    <Button size="sm" style={{ backgroundColor: "#234"}}variant="primary">Clipboard Email</Button>
                </CopyToClipboard>
            </Card.Body>
        </Card>
    )
}

export default KgvItem
