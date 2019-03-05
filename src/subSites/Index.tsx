import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown } from 'react-bootstrap';
import twoBeers from './../graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './../graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './../graphics/beer-820011_640.jpg'

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

        return <Jumbotron style={headerJumbotronStyle} fluid>
        <Container>
          <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
            <div className="grid-container">
              <div><Image src={beerToGlass} style={{ width: '70%' }} rounded/></div>
              <div>
                <h1>50+</h1>
                <p>Piw kraftowych</p>
              </div>
            </div>
          </Card>
        </Container>
      </Jumbotron>
    }
}

export default Index;