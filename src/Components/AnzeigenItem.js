import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Col, Row, Card, Button} from "react-bootstrap";
import { GeoAltFill, PersonCircle, Telephone, Envelope } from 'react-bootstrap-icons';




function AnzeigenItem() {

    const {id} = useParams ();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [anzeige, setAnzeige] = useState([]);

    const loadAnzeigeById = (searchQuery) => {
        const API_URL = "https://goschreber.herokuapp.com"
        const url = `${API_URL}/anzeigens/${id}`
        setIsLoading(true);
        setError(false);
    
        fetch(url)
          .then((res) => {
          
          console.log(res);
    
            if (!res.ok) throw new Error("Oh noo");
            setIsLoading(false);
            return res.json();
          })
          .then((json) => setAnzeige(json.data))
          .catch((err) => setError(true));
    
      };
    
      useEffect(loadAnzeigeById, []);

        console.log(anzeige)

    return (
            <Container fluid>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={6}>
                        <Card border="success" className="mb-1">
                            <Card.Body>
                                    <Card.Img className="mb-3" variant="top" src="https://cdn.kiekmo.hamburg/vary/2020/02/listicle-kleingarten-lokstedt-shutterstock_437208574_content-728x410.jpg" />
                                    <Card.Title className="text-danger"><h4>{anzeige.titel}</h4></Card.Title>
                                    <Card.Text className="text-muted mb-3">
                                        <GeoAltFill className="mr-1" color="green" size={12}/> KGV "{anzeige.kgv?.kgvname}", {anzeige.kgv?.adresse.strasse}, {anzeige.kgv?.adresse.plz} Leipzig
                                    </Card.Text>
                                    <Card.Subtitle className="mb-3">Beschreibung</Card.Subtitle>    
                                    <Card.Text className="mb-3">{anzeige.beschreibung}</Card.Text>
                                    <Card.Subtitle className="mb-2">Details</Card.Subtitle>
                                    <Card.Text className="mb-1">Preis:{anzeige.preis}€</Card.Text>
                                    <Card.Text className="mb-1">Gartengröße: {anzeige.gartenqm}qm</Card.Text>
                                    <Card.Text className="mb-1">Jährliche Pachtkosten: {anzeige.pachtkosten}€</Card.Text>
                                    <Card.Text className="mb-1">Verfügbar ab: {anzeige.verfügbar}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                       <Col xs={3}>
                            <Row className="mb-1">
                                <Button className="mr-1" variant="outline-danger" block>Merken</Button>
                            </Row>
                            <Row className="mb-1">
                                <Button className="mr-1" variant="outline-danger" block>Teilen</Button> 
                            </Row>
                            <Row>
                                <Card border="success" className="mb-1" >
                                 <Card.Body >
                                    <Card.Subtitle className="mb-2"><PersonCircle className="mr-2"color="green" size={17}/>{anzeige.name}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2"><Envelope className="mr-2" color="green" size={17}/>{anzeige.email}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2"><Telephone className="mr-2" color="green" size={17}/>{anzeige.telefon}</Card.Subtitle>
                                 </Card.Body>
                                </Card>
                            </Row>            
                        </Col>
            </Row>
        </Container>
    )
}

export default AnzeigenItem
