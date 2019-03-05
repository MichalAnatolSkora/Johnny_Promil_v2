import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown } from 'react-bootstrap';
import twoBeers from './../graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './../graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './../graphics/beer-820011_640.jpg'

class Products extends Component {
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
                    <CardDeck>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
                            <Card.Img src={twoBeers}></Card.Img>
                            Text
            </Card>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
                            <Card.Img src={oneBeer} variant="bottom" style={{ width: '5rem' }}></Card.Img>
                        </Card>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
                            Text
            </Card>
                    </CardDeck>
                </Container>
            </Jumbotron>

            <Jumbotron style={jumbotronStyle} fluid>
                <Container>
                    <CardDeck>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
                            <Card.Img src={twoBeers}></Card.Img>
                            Text
            </Card>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-1">
                            <Card.Img src={oneBeer} style={{ width: '5rem' }}></Card.Img>
                            Text
            </Card>
                        <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
                            Text
            </Card>
                    </CardDeck>
                </Container>
            </Jumbotron>
        </>
    }
}

export default Products;