import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { GeoAltFill, Envelope, Globe2, Heart, HeartFill } from 'react-bootstrap-icons';

function FavoritenVereinItem({favouritedItems, favClick, verein}) {

    const web = verein.web
    const email = verein.email
  
    const isFavourite = () => {
      return favouritedItems.find((el) => el._id === verein._id) ? true : false
    }


    return (
        <Card border="success" className="mb-1" >
        <Card.Body >
            <Card.Title>{verein.kgvname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-truncate"><GeoAltFill className="mr-2"color="green" size={17}/>{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
            {email && <Card.Subtitle className="mb-2 text-muted text-truncate"><Envelope className="mr-2" color="green" size={17}/>{verein.email}</Card.Subtitle>}
            {web && <Card.Subtitle href={verein.web} className="mb-3 text-muted text-truncate"><Globe2 className="mr-2" color="green" size={17} /><a className="mb-3 text-muted" href={verein.web}>{verein.web}</a></Card.Subtitle>}
            <Container className="justify-content-center">
                <Row >
                    <Button onClick={favClick} size="sm" className="mb-1 mr-1 " variant='outline-danger'>
                        {isFavourite()? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                        {isFavourite()? 'Entfernen' : 'Merken'}
                    </Button>
                    <Button size="sm" className="mb-1 mr-1" variant="outline-danger">Teilen</Button>
                </Row>
            </Container>
          
            
        </Card.Body>
    </Card>
    )
}

export default FavoritenVereinItem
