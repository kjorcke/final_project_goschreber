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
import axios from 'axios';
import { useHistory } from "react-router-dom";
import useLocalStorage from './useLocalStorage';

function App() {
  
  const [kgvs, setKgvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [gaerten, setGaerten] = useState([]);
  const [anzeige, setAnzeige] = useState({titel:'', beschreibung:'', kgv:'', pachtkosten:'', preis:'', verfügbar:'', gartemqm:''})
  const [ownAnzeige, setOwnAnzeige] = useLocalStorage('anzeigen', []);
  const history = useHistory();
  

  const loadKgvs = (searchQuery) => {
    const API_URL = "http://localhost:5000"
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
      const API_URL = "http://localhost:5000"
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

  function handleSubmit(e) {
    e.preventDefault();
    axios
        .post("http://localhost:5000/anzeigens", anzeige)
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

  return (
    
  <Container fluid>
    <Row>
      <Col>
      <Header />
      </Col>
    </Row>
    <Row>
      <Col>
      <Router>    
        <Switch>
          <Route exact path="/"> 
            <Map kgvs={kgvs}/>
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
        </Switch>  
      </Router>
      </Col>
    </Row>
      
  </Container>        
  )
}

export default App;
