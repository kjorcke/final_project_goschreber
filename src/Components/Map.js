import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import  carrot from '../assets/carrot.png';
import KgvItem from "./KgvItem";
import useLocalStorage from '../useLocalStorage';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Favourites from "./Favourites";
import {Container, Row, Col, Card, Button} from "react-bootstrap";



function Map({kgvs, favouriteGarden, favouritedItems}) {


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
              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            {kgvs.map(verein => (
                <Marker
                  key={verein._id}
                  icon = {carrotIcon}
                  position={[
                    verein.geometry.coordinates[0],
                    verein.geometry.coordinates[1]
                  ]}
                >
                  <Popup>
                    <Card className="mb-1" style={{ width: '15rem' }}>
                      <Card.Body>
                          <Card.Title>{verein.kgvname}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted">{verein.email}</Card.Subtitle>
                          <Card.Subtitle className="mb-2 text-muted">{verein.web}</Card.Subtitle>
                          <Button size="sm" className="mb-1" variant="primary">Add to Favourites</Button>
                          <CopyToClipboard text={verein.email}>
                              <Button size="sm" style={{ backgroundColor: "#234"}}variant="primary">Clipboard Email</Button>
                          </CopyToClipboard>
                       </Card.Body>
                    </Card>
                  </Popup>
                </Marker>  
              ))}
            </MapContainer>
    )
}

export default Map
