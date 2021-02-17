import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import  carrot from '../assets/carrot.png';
import KgvItem from "./KgvItem";
import useLocalStorage from '../useLocalStorage';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Favourites from "./Favourites";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { GeoAltFill, Envelope, Globe2, Heart, HeartFill } from 'react-bootstrap-icons';



function Map({kgvs, favourites, favouritedItems, setFavourites}) {

  
  function favouriteGarden(gardenid) {
  
      console.log(gardenid)
      console.log(favourites.indexOf(gardenid))
  
      if (favourites.indexOf(gardenid) === -1){
        setFavourites([
          ...favourites,
          gardenid
        ])
      } else {
        
        setFavourites(favourites.filter(item => item != gardenid))
      }
    }

    const isFavourite = (gartenid) => {
      return favouritedItems.find((el) => el._id === gartenid) ? true : false
    }
    
    const web = (website) => {
      return website ? true : false
    }

    const email = (emailadresse) => {
      return emailadresse ? true : false
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
                  <Popup >
                    <Card border="success" style={{ width: '19rem' }} >
                      <Card.Body >
                          <Card.Title>{verein.kgvname}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted"><GeoAltFill className="mr-2"color="green" size={17}/>{verein.adresse.strasse}, {verein.adresse.plz} {verein.adresse.stadt}</Card.Subtitle>
                          {email(verein.email) && <Card.Subtitle className="mb-2 text-muted"><Envelope className="mr-2" color="green" size={17}/>{verein.email}</Card.Subtitle>}
                          {web(verein.web) && <Card.Subtitle href={verein.web} className="mb-3 text-muted"><Globe2 className="mr-2" color="green" size={17} /><a className="mb-3 text-muted" href={verein.web}>{verein.web}</a></Card.Subtitle>}
                          <Container className="justify-content-center">
                              <Row >
                                  <Button onClick={() => favouriteGarden(verein._id)} size="sm" className="m-1 " variant='outline-danger'>
                                      {isFavourite(verein._id)? <HeartFill className="mr-2" color="red" size={17}/> : <Heart className="mr-2" color="red" size={17}/>}
                                      {isFavourite(verein._id)? 'Entfernen' : 'Merken'}
                                  </Button>
                                  <Button size="sm" className="m-1" variant="outline-danger">Teilen</Button>
                              </Row>
                          </Container>
                      </Card.Body>
                    </Card>
                  </Popup>
                </Marker>  
              ))}
            </MapContainer>
    )
}

export default Map
