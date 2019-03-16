import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown, Carousel } from 'react-bootstrap';
import twoBeers from './../graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './../graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './../graphics/beer-3803425_1920.jpg'
import deskBallantines from './../graphics/alcohol-1961542_640_cut.jpg'

class Index extends Component {
  render() {
    const headerJumbotronStyle = {
      backgroundColor: "transparent",
      paddingTop: "80px",
      paddingBottom: "20px",
      margin: "0px",
      maxheight: "100px"
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
          <Carousel>
            <Carousel.Item>
              <img
            className="d-block w-100"
            src={deskBallantines}
            alt="First slide"
          />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
            className="d-block w-100"
            src={deskBallantines}
            alt="Third slide"
          />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
            className="d-block w-100"
            src={deskBallantines}
            alt="Third slide"
          />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Jumbotron>

      <Jumbotron style={jumbotronStyle} fluid>
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