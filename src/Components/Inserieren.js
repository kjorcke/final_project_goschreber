import React, {useState} from 'react';
import {Card, Container, Row, Col, Form, Button} from "react-bootstrap";





function Inserieren({kgvs, anzeige, setAnzeige, handleSubmit}) {


/* 
const [gartenId, setGartenId] = useState(""); */
    
function handleSelect(e){
    const verein = (kgvs.filter((verein) => verein.kgvname == e.target.value))

    const kgv = (verein.map(el => el._id))
    
    setAnzeige({...anzeige, kgv:kgv})
 }



/*
      if (favourites.indexOf(gardenid) === -1){
        setFavourites([
          ...favourites,
          gardenid
        ])
      } else {
        
        setFavourites(favourites.filter(item => item != gardenid))
      }
*/

return (
   
     <Container>
            <Row className="justify-content-md-center mt-5">
                    <Col xs={8}>
                       <Card  border="success" className="justify-content-md-center" >
                                <Form onSubmit={handleSubmit} className="m-3" >
                                <h5 className="mb-3">
                                   Anzeigendetails
                                </h5>
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
                                                <h5 className="mb-3">
                                                    Anbieterdetails
                                                </h5>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control value={anzeige.name} onChange={(e) => setAnzeige({...anzeige, name:e.target.value})} type="text" name="name"  as="textarea" rows={1} />
                                                 </Form.Group>
                                                 <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control value={anzeige.email} onChange={(e) => setAnzeige({...anzeige, email:e.target.value})} type="text" name="email"  as="textarea" rows={1} />
                                                 </Form.Group>
                                                 <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Telefonnummer</Form.Label>
                                                    <Form.Control value={anzeige.telefon} onChange={(e) => setAnzeige({...anzeige, telefon:e.target.value})} type="text" name="telefon"  as="textarea" rows={1} />
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
