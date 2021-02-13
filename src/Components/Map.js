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

/*   const [favourites, setFavourites] = useLocalStorage('favourite', []);

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

    const favouritedItems = kgvs.filter(({_id}) => favourites.indexOf(_id) != -1)
    console.log(favouritedItems) */
  

    return (
    <Container fluid>
      <Row>
        <Col xs={7}>
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
        </Col>

        <Col>
            {/* {kgvs.map(verein => <KgvItem favClick={favouriteGarden} verein={verein} key={verein._id}/>)}  */}
        </Col>
        <Col>
          <h2>Favourite List</h2>
          {/* <CopyToClipboard text={favouritedItems.map(el => el.email)}>
            <button>clipboard all email addresses</button>
          </CopyToClipboard> */}
          {/* {favouritedItems.map(verein => <Favourites favClick={() => favouriteGarden(verein._id)} verein={verein} key={verein._id}/>)} */}
        </Col>
      </Row>
    </Container>
   
    )
}

export default Map
