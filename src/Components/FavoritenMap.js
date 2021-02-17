import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import  carrot from '../assets/carrot.png';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { GeoAltFill, Envelope, Globe2, Heart, HeartFill } from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';

function FavoritenMap({favouritedItems, merkFreiItems, setFavourites, favourites, setMerkFrei, merkFrei }) {


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
 /*77777777777777777777777777777777777777777777777777777777777777777777777 */
      function merkFreiGarten(gartenid) {

        console.log(gartenid)
        console.log(merkFrei.indexOf(gartenid))
    
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
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {favouritedItems.map(verein => (
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
            <Card.Body>
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
        {merkFreiItems.map(garten => (
                    <Marker
                      key={garten._id}
                      icon = {carrotIcon}
                      position={[
                        garten.kgv.geometry.coordinates[0],
                        garten.kgv.geometry.coordinates[1]
                      ]}
                    >
                      <Popup>
                        <Card border="success">
                          <Card.Body className="mb-1 mt-1"> 
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
                                  {isMerkFrei(garten._id) ? 'Entfernen' : 'Merken'}
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

export default FavoritenMap
