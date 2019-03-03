import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import './App.css';
import twoBeers from './580b57fbd9996e24bc43c090.png'
import oneBeer from './580b57fbd9996e24bc43c091.png'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

class App extends Component {
  render() {
    const headerJumbotronStyle = {
      backgroundColor: "#f2f2f2",
      paddingTop: "100px",
      margin: "0px"
    };

    const jumbotronStyle = {
      backgroundColor: "#f2f2f2",
      paddingTop: "0px",
      margin: "0px"
    };

    const footerJumbotronStyle2 = {
      backgroundColor: "#e6e6e6",
      padding: "10px",
      margin: "0px"
    };

    const GoogleMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}  >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>));

    return (
      <div className="App">

        <Navbar fixed='top' bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><Button variant="danger">Johnny Promil</Button></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto justify-content-end">
                <Nav.Link href="#home"><Button size="sm" variant="warning">Główna</Button></Nav.Link>
                <Nav.Link href="#link"><Button size="sm" variant="warning">Oferta</Button></Nav.Link>
                <Nav.Link href="#kontakt"><Button size="sm" variant="warning">Kontakt</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Jumbotron style={headerJumbotronStyle} fluid>
          <Container>
            <Card bg="info" border="warning" text="white" className="text-center p-4">

            </Card>
          </Container>
        </Jumbotron>

        <Jumbotron style={headerJumbotronStyle} fluid>
          <Container>
            <iframe width="100%" height="400px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.1522285232337!2d17.05488071135112!3d51.11567543726553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d3d97cf061%3A0xc08116d71816dd97!2sG%C3%B3rnickiego+6%2C+50-337+Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1551622751662" frameBorder="0" style={{ border: "2" }} allowFullScreen></iframe>
          </Container>
        </Jumbotron>

        <Jumbotron style={jumbotronStyle} fluid>
          <Container>
            <CardDeck>
              <Card bg="info" text="white" className="text-center p-4">
                <Card.Img src={twoBeers}></Card.Img>
                Text
            </Card>
              <Card bg="info" text="white" className="text-center p-4">
                <Card.Img src={oneBeer} variant="bottom" style={{ width: '5rem' }}></Card.Img>
              </Card>
              <Card bg="info" text="white" className="text-center p-4">
                Text
            </Card>
            </CardDeck>
          </Container>
        </Jumbotron>

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

        <Jumbotron style={footerJumbotronStyle2} fluid>
          <Container>
            Footer
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

//<a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by winkimages - www.freepik.com</a>

export default App;
