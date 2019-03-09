import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown } from 'react-bootstrap';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { HashRouter, Route, Link, NavLink } from "react-router-dom";

import Index from './subSites/Index';
import Shops from './subSites/Shops';
import Products from './subSites/Products';

class App extends React.Component<any, any> {

  private expanded: boolean = false;

  constructor(props: any) {
    super(props);
    this.state = { expanded: false };
  }

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
      padding: "20px",
      margin: "0px",
      bottom: "0",
      position: "absolute",
      width: "100%"
    } as React.CSSProperties;

    const cardStyle = {
      borderWidth: '3px'
    }

    return (
      <HashRouter>
        <>
          <div className="App">
            <Navbar onToggle={(b: boolean) => this.setState({ expanded: b })} expanded={this.state.expanded} fixed='top' bg="dark" variant="dark" expand="lg">
              <Container>
                <NavLink className="nav-link" to="/"><Button variant="danger"><FaBeer/> Johnny Promil</Button></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse appear={true}>
                  <Nav className="mr-auto justify-content-end">
                    <NavLink className="nav-link" to="/"><Button onClick={() => this.setState({ expanded: false })} size="sm" variant="warning">Główna</Button></NavLink>
                    <NavLink className="nav-link" to="/Oferta"><Button onClick={() => this.setState({ expanded: false })} size="sm" variant="warning">Oferta</Button></NavLink>
                    <NavLink className="nav-link" to="/Sklepy"><Button onClick={() => this.setState({ expanded: false })} size="sm" variant="warning">Sklepy</Button></NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Route path="/" exact component={Index} />
            <Route path="/Oferta/" component={Products} />
            <Route path="/Sklepy/" component={Shops} />

            <Jumbotron style={footerJumbotronStyle2} fluid>
              <Container>
              Footer
              </Container>
          </Jumbotron>
          </div>
        </>
      </HashRouter>
    );
  }
}

//<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by winkimages - www.freepik.com</a>

export default App;
