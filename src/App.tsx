import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import './App.css';
import twoBeers from './580b57fbd9996e24bc43c090.png'
import oneBeer from './580b57fbd9996e24bc43c091.png'
// import LogoNodejs from 'react-ionicons/lib/LogoNodejs';

class App extends Component {
  render() {
    const jumbotronStyle = {
      backgroundColor: "#f2f2f2",
      // padding: "0px",
      margin: "0px"
    };

    const jumbotronStyle2 = {
      backgroundColor: "#e6e6e6",
      // padding: "0px",
      margin: "0px"
    };

    return (
      <div className="App">

        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Johnny Promil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto justify-content-end">
                <Nav.Link href="#home"><Button variant="warning">Główna</Button></Nav.Link>
                <Nav.Link href="#link"><Button variant="warning">Oferta</Button></Nav.Link>
                <Nav.Link href="#kontakt"><Button variant="warning">Kontakt</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Jumbotron style={jumbotronStyle} fluid>
          <Container>
            <CardDeck>
              <Card bg="info" text="white" className="text-center p-4">
                <Card.Img src={twoBeers}></Card.Img>
                Text
            </Card>
              <Card bg="info" text="white" className="text-center p-1">
                <Card.Img src={oneBeer} style={{ width: '5rem' }}></Card.Img>
                Text
            </Card>
              <Card bg="info" text="white" className="text-center p-4">
                Text
            </Card>
            </CardDeck>
          </Container>
        </Jumbotron>

        <Jumbotron style={jumbotronStyle2} fluid>
          <Container>
            <CardDeck>
              <Card bg="info" text="white" className="text-center p-4">
                Text
            </Card>
              <Card bg="info" text="white" className="text-center p-4">
                Text
            </Card>
              <Card bg="info" text="white" className="text-center p-4">
                Text
            </Card>
            </CardDeck>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

//<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by winkimages - www.freepik.com</a>

export default App;
