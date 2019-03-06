import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown } from 'react-bootstrap';
import twoBeers from './../graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './../graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './../graphics/beer-3803425_1920.jpg'

class Index extends Component {
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

    const cardStyle = {
      borderWidth: '3px'
    }

    return <>
      <Jumbotron style={headerJumbotronStyle} fluid>
        <Container>
          <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
            <div className="grid-container">
              <div><Image src={beerToGlass} style={{ width: '100%' }} rounded /></div>
              <div>
                <h1>50+</h1>
                <p>Piw z browarów rzemieślniczych</p>
                <h1>10+</h1>
              </div>
            </div>
          </Card>
        </Container>
      </Jumbotron>
      <Jumbotron style={jumbotronStyle} fluid>
        <Container>
          <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
            <h1>Z Pasją dla ludzi z pasją</h1>
          </Card>
        </Container>
      </Jumbotron>
    </>
  }
}

export default Index;