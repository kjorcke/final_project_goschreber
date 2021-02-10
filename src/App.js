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

function App() {
  
  const [kgvs, setKgvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


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
            <FreieGaerten kgvs={kgvs}/>
          </Route>
          <Route exact path="/inserieren"> 
            <Inserieren kgvs={kgvs}/>
          </Route>
        </Switch>  
      </Router>
      </Col>
    </Row>
      
  </Container>        
  )
}

export default App;
