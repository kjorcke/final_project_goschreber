import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from "./Components/Map";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row,} from 'react-bootstrap';
import Layout from './Components/Layout';
import FreieGaerten from './Components/FreieGaerten';
import Inserieren from './Components/Inserieren';
import Verwaltung from './Components/Verwaltung';
import KgvItem from './Components/KgvItem';
import Favourites from './Components/Favourites';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useLocalStorage from './useLocalStorage';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  
  const [kgvs, setKgvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gaerten, setGaerten] = useState([]);
  const [anzeige, setAnzeige] = useState({titel:'', beschreibung:'', kgv:'', pachtkosten:'', preis:'', verfügbar:'', gartemqm:''})
  const [ownAnzeige, setOwnAnzeige] = useLocalStorage('anzeigen', []);
  const history = useHistory();
  

  const loadKgvs = (searchQuery) => {
    const API_URL = "https://goschreber.herokuapp.com"
    const url = `${API_URL}/kgvs`
    setIsLoading(true);
    setError(false);

    fetch(url)
      .then((res) => {
      
      console.log(res);

        if (!res.ok) throw new Error("Oh noo");
        setIsLoading(false);
        return res.json();
      })
      .then((json) => setKgvs(json.data))
      .catch((err) => setError(true));

  };

    useEffect(loadKgvs, []);
  
  
  const loadGaerten = (searchQuery) => {
      const API_URL = "https://goschreber.herokuapp.com"
      const url = `${API_URL}/anzeigens`
      setIsLoading(true);
      setError(false);
  
      fetch(url)
        .then((res) => {
        
        console.log(res);
  
          if (!res.ok) throw new Error("Oh noo");
          setIsLoading(false);
          return res.json();
        })
        .then((json) => setGaerten(json.data))
        .catch((err) => setError(true));
        };

      useEffect(loadGaerten, []);
/* //////////////////////////// ANZEIGEN IN LOCAL STORAGE///////////////////////////////////// */
  function handleSubmit(e) {
    e.preventDefault();
    axios
        .post("https://goschreber.herokuapp.com/anzeigens", anzeige)
        .then((res) => {
            const {_id} = res.data.data;
            setOwnAnzeige([
                ...ownAnzeige,
                _id
            ]);
            
            /* history.push('/frei') */
        })  
  }
  const userAnzeigen = gaerten.filter(({_id}) => ownAnzeige.indexOf(_id) != -1)

  /* ////////////////////////////////////////////////////////////////////////////////////////// */


  /* ///////////////////// SETTING FAVOURITES IN LOCAL STORAGE /////////////////////*/
  /* ////////////////////////////////////////////////////////////////////////////////*/

  const [favourites, setFavourites] = useLocalStorage('favourite', []);
  
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
  console.log(favouritedItems)

/*/////////////////////////////////////////////////////////////////////////////////////////////*/


  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Container fluid>
              <Row>
                <Col xs={9}>
                  <Map kgvs={kgvs}/>
                </Col>
                <Col>
                  <Scrollbars style={{ width: "100%", height: "100%" }}>
                    {kgvs.map(verein => <KgvItem favouritedItems={favouritedItems} favClick={() => favouriteGarden(verein._id)} verein={verein} key={verein._id}/>)}
                 </Scrollbars>
                </Col>
              </Row>
            </Container> 
          </Route>
          <Route exact path="/frei"> 
            <FreieGaerten gaerten= {gaerten} kgvs={kgvs}/>
          </Route>
          <Route exact path="/inserieren"> 
            <Inserieren handleSubmit={handleSubmit} anzeige={anzeige} setAnzeige={setAnzeige} gaerten= {gaerten} kgvs={kgvs}/>
          </Route>
          <Route exact path="/verwalten"> 
            <Verwaltung userAnzeigen={userAnzeigen} gaerten= {gaerten} kgvs={kgvs}/>
          </Route>
          <Route exact path="/merken"> 
                <h2>Favourite List</h2>
              <CopyToClipboard text={favouritedItems.map(el => el.email)}>
                <button>clipboard all email addresses</button>
              </CopyToClipboard>
              {favouritedItems.map(verein => <Favourites favClick={() => favouriteGarden(verein._id)} verein={verein} key={verein._id}/>)}
          </Route>
        </Switch>  
      </Router>
  )
}

export default App;
