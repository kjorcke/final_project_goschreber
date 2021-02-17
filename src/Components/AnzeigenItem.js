import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Col, Row, Card, Button} from "react-bootstrap";
import { GeoAltFill, PersonCircle, Telephone, Envelope, Heart, HeartFill } from 'react-bootstrap-icons';




function AnzeigenItem({setMerkFrei, merkFrei, merkFreiItems}) {

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
    
    function merkFreiGarten(gartenid) {
    
        if (merkFrei.indexOf(gartenid) === -1){
            setMerkFrei([
            ...merkFrei,
            gartenid
            ])
        } else {
            
            setMerkFrei(merkFrei.filter(item => item != gartenid))
        }
        }    
      
    const isMerkFrei = () => {
        return merkFreiItems.find((el) => el._id === anzeige._id) ? true : false
        }

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
                                    <Row>
                                        <Col xs={4}>
                                            <Card.Text className="mb-1 text-muted">Preis:</Card.Text>
                                        </Col>
                                        <Col xs={2}>
                                            <Card.Text className="mb-1">{anzeige.preis}€</Card.Text>
                                        </Col>
                                        <Col xs={4}>
                                            <Card.Text className="mb-1 text-muted">Gartengröße:</Card.Text>
                                        </Col>
                                        <Col xs={2}>
                                            <Card.Text className="mb-1">{anzeige.gartenqm}qm</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={4}>
                                            <Card.Text className="mb-1 text-muted">Jährliche Pachtkosten:</Card.Text>
                                        </Col>
                                        <Col xs={2}>
                                            <Card.Text className="mb-1">{anzeige.pachtkosten}€</Card.Text>
                                        </Col>
                                        <Col xs={4}>
                                            <Card.Text className="mb-1 text-muted">Verfügbar ab:</Card.Text>
                                        </Col>
                                        <Col xs={2}>
                                            <Card.Text className="mb-1">{anzeige.verfügbar}</Card.Text>
                                        </Col>
                                    </Row>
                            </Card.Body>
                        </Card>
                            </Col>
                       <Col xs={3}>
                            <Row>
                                <Card border="success" style={{ width: '18rem' }} >
                                 <Card.Body>
                                 <Button onClick={() => merkFreiGarten(anzeige._id)} className="mr-2 " variant='outline-danger' block>
                                    {isMerkFrei()? <HeartFill className="mr-2" color="red" size={18}/> : <Heart className="mr-2" color="red" size={18}/>}
                                    {isMerkFrei()? 'Entfernen' : 'Merken'}
                                </Button>
                                    <Button className="mr-1" variant="outline-danger" block>Teilen</Button>      
                                    <Card.Subtitle className="mt-3 mb-2"><PersonCircle className="mr-3"color="green" size={17}/>{anzeige.name}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2"><Envelope className="mr-3" color="green" size={17}/>{anzeige.email}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2"><Telephone className="mr-3" color="green" size={17}/>{anzeige.telefon}</Card.Subtitle>
                                 </Card.Body>
                                </Card>
                            </Row>            
                        </Col>
            </Row>
        </Container>
    )
}

export default AnzeigenItem
