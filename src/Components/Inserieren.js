import React, {useState} from 'react';
import {Card, Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";



function Inserieren({kgvs}) {

const [anzeige, setAnzeige] = useState({titel:'', beschreibung:'', kgv:'', pachtkosten:'', preis:'', verfügbar:'', gartemqm:''})
const history = useHistory();
/* 
const [gartenId, setGartenId] = useState(""); */
    
function handleSelect(e){
    const verein = (kgvs.filter((verein) => verein.kgvname == e.target.value))

     console.log(e.target.value)
     console.log(verein)

    const kgv = (verein.map(el => el._id))
    console.log(kgv)
    
    setAnzeige({...anzeige, kgv:kgv})
 }

function handleSubmit(e) {
    e.preventDefault();
    {axios.post("http://localhost:5000/anzeigens", anzeige)
    .then(() => {history.push("/frei")})
    
    }}


return (
   
     <Container>
            <Row className="justify-content-md-center">
                    <Col>
                       <Card style={{ width: '40rem' }}>
                                <Form onSubmit={handleSubmit} className="m-3" >
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Titel der Anzeige</Form.Label>
                                    <Form.Control value={anzeige.titel} onChange={(e) => setAnzeige({...anzeige, titel:e.target.value})} type="text" name="titel"  as="textarea" rows={1} />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Beschreibung</Form.Label>
                                    <Form.Control value={anzeige.beschreibung} onChange={(e) => setAnzeige({...anzeige, beschreibung:e.target.value})} type="text" name="beschreibung" as="textarea" rows={3} />
                                   </Form.Group>
                                            <Row>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Preis</Form.Label>
                                                        <Form.Control value={anzeige.preis} onChange={(e) => setAnzeige({...anzeige, preis:e.target.value})}type="text" name="preis" as="textarea" rows={1} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Jährliche Pachtkosten</Form.Label>
                                                        <Form.Control value={anzeige.pachtkosten} onChange={(e) => setAnzeige({...anzeige, pachtkosten:e.target.value})}type="text" name="pachtkosten" as="textarea" rows={1} />
                                                    </Form.Group>
                                                </Col>
                                                
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Größe</Form.Label>
                                                        <Form.Control value={anzeige.gartenqm} onChange={(e) => setAnzeige({...anzeige, gartenqm:e.target.value})}type="text" name="gartenqm" as="textarea" rows={1} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Verfügbar ab</Form.Label>
                                                        <Form.Control value={anzeige.verfügbar} onChange={(e) => setAnzeige({...anzeige, verfügbar:e.target.value})}type="text" name="verfügbar"  as="textarea" rows={1} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>Kleingartenverein</Form.Label>
                                                    <Form.Control onChange={handleSelect} type="" name="kgvname" 
                                                    as="select">
                                                    <option>bitte auswählen</option>
                                                    {kgvs.map(verein => <option>{verein.kgvname}</option>)}
                                                    </Form.Control>
                                                </Form.Group>
                                            
                                                <Button variant="success" type="submit">
                                                Anzeige aufgeben
                                                </Button>
                                                
                                </Form>
                            </Card>
                    </Col>
                </Row>
        </Container>

    )
}

export default Inserieren
