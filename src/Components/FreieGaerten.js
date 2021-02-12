import { divIcon } from "leaflet";
import React, {useState, useEffect} from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import FreiItem from "./FreiItem";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import  carrot from '../assets/carrot.png';


    
function FreieGaerten({gaerten}) {


  

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
        <Container>
          <Row>
            <Col>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
                        <Card className="mb-1" style={{ width: '15rem' }}>
                          <Card.Body>
                              <Card.Title>{garten.kgv.kgvname}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Popup>
                    </Marker>  
                  ))}
                </MapContainer>
            </Col>
            <Col>
            {gaerten.map(freigarten=> <FreiItem freigarten={freigarten} key={freigarten._id}/>)}
            </Col>
          </Row>
        </Container>
    )
}

export default FreieGaerten
