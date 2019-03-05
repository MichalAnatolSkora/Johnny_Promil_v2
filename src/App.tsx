import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import twoBeers from './graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './graphics/beer-820011_640.jpg'
import Index from './subSites/Index';
import Shops from './subSites/Shops';
import Products from './subSites/Products';

class App extends Component {
  render() {
    const headerJumbotronStyle = {
      backgroundColor: "transparent",
      paddingTop: "80px",
      paddingBottom: "20px",
      margin: "0px"
    };

    const jumbotronStyle = {
      backgroundColor: "transparent",
      paddingTop: "0px",
      paddingBottom: "20px",
      margin: "0px"
    };

    const footerJumbotronStyle2 = {
      backgroundColor: "#e6e6e6",
      padding: "5px",
      margin: "0px"
    };

    const cardStyle = {
      borderWidth: '3px'
    }

    return (
      <Router>
        <div className="App">
          <Navbar fixed='top' bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home"><Button variant="danger">Johnny Promil</Button></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav className="mr-auto justify-content-end">
                  <NavLink className="nav-link" to="/"><Button size="sm" variant="warning">Główna</Button></NavLink>
                  <NavLink className="nav-link" to="/oferta"><Button size="sm" variant="warning">Oferta</Button></NavLink>
                  <NavLink className="nav-link" to="/sklepy"><Button size="sm" variant="warning">Sklepy</Button></NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Route path="/" exact component={Index} />
          <Route path="/oferta/" component={Products} />
          <Route path="/sklepy/" component={Shops} />

          <Jumbotron style={footerJumbotronStyle2} fluid>
            <Container>
              Footer
          </Container>
          </Jumbotron>
        </div>
      </Router>
    );
  }
}

//<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by winkimages - www.freepik.com</a>

export default App;
