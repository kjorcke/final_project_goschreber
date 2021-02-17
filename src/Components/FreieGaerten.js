import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import  carrot from '../assets/carrot.png';
import {NavLink} from 'react-router-dom';
import { GeoAltFill, Heart, HeartFill } from 'react-bootstrap-icons';

    
function FreieGaerten({gaerten, ownAnzeige, setMerkFrei, merkFrei, merkFreiItems}) {

  
  function merkFreiGarten(gartenid) {

    console.log(gartenid)
    console.log(merkFrei.indexOf(gartenid))
    console.log(ownAnzeige)

    if (merkFrei.indexOf(gartenid) === -1){
      setMerkFrei([
        ...merkFrei,
        gartenid
      ])
    } else {
      
      setMerkFrei(merkFrei.filter(item => item != gartenid))
    }
  }

  const isMerkFrei = (freiId) => {
    return merkFreiItems.find((el) => el._id === freiId) ? true : false
  }
  

    const position = [51.330743159430824, 12.36348580378971]
    const carrotIcon = L.icon({
      iconUrl: carrot,
      iconSize:     [38, 38], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [19, 38],
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [0, -38]
    });

    return (
                <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                {gaerten.map(garten => (
                    <Marker
                      key={garten._id}
                      icon = {carrotIcon}
                      position={[
                        garten.kgv.geometry.coordinates[0],
                        garten.kgv.geometry.coordinates[1]
                      ]}
                    >
                      <Popup>
                          <Card border="success" style={{ width: '19rem' }}>
                            <Card.Body className="mb-1"> 
                                <Card.Text className="mb-1 text-muted"><GeoAltFill className="mr-1" color="green" size={12}/>{garten.kgv.kgvname}</Card.Text>
                                <Card.Title className="mb-1 text-success"><h4>{garten.titel}</h4></Card.Title>
                                <Card.Text className="mb-1 mt-1 text-muted text-truncate">{garten.beschreibung}</Card.Text>
                                <Card.Subtitle className="mb-1 mt-1 text-success"><h5>{garten.preis}€</h5></Card.Subtitle>
                                <Row >
                                    <NavLink to={`/frei/${garten._id}`}>
                                        <Button size="sm" className="mr-2 ml-3" variant="outline-danger">Details</Button>
                                    </NavLink>
                                    <Button onClick={() => merkFreiGarten(garten._id)} size="sm" className="mr-2 " variant='outline-danger'>
                                    {isMerkFrei(garten._id)? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                                    {isMerkFrei(garten._id)? 'Entfernen' : 'Merken'}
                          </Button>
                                        <Button size="sm" className="mr-2" variant="outline-danger">Teilen</Button>
                                </Row>
                            </Card.Body>
                        </Card>
                  </Popup>
                    </Marker>  
                  ))}
                </MapContainer>
    )
}

export default FreieGaerten
