import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup} from "react-bootstrap";
import { GeoAltFill, Envelope, Globe2, Heart, HeartFill } from 'react-bootstrap-icons';





function KgvItem({favouritedItems, verein, favClick}) {

 
  const web = verein.web
  const email = verein.email

  const isFavourite = () => {
    return favouritedItems.find((el) => el._id === verein._id) ? true : false
  }

    return (
        <Card border="success" className="mb-1" >
            <ListGroup>
            <ListGroup.Item>
            <Card.Title>{verein.kgvname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><GeoAltFill className="mr-2"color="green" size={17}/>{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
                {email && <Card.Subtitle className="mb-2 text-muted"><Envelope className="mr-2" color="green" size={17}/>{verein.email}</Card.Subtitle>}
                {web && <Card.Subtitle href={verein.web} className="mb-3 text-muted"><Globe2 className="mr-2" color="green" size={17} /><a className="mb-3 text-muted" href={verein.web}>{verein.web}</a></Card.Subtitle>}
                <Button onClick={favClick} size="sm" className="mb-1 mr-1" variant='outline-danger'>
                            {isFavourite()? <HeartFill className="mr-2 mr-1" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                            {isFavourite()? 'Entfernen' : 'Merken'}
                </Button>
                <Button size="sm" className="mb-1" variant="outline-danger">Teilen</Button>
            </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default KgvItem

/* variant={isFavourite() ? 'danger' : 'outline-danger'} */