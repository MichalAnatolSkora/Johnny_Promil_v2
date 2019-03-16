import React, { Component } from 'react';
import { Button, Card, Jumbotron, Container, CardDeck, Navbar, Nav, Image, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import shopPhoto from './../graphics/53176126_1938901816235260_7024924478719131648_n.jpg'
import twoBeers from './../graphics/580b57fbd9996e24bc43c090.png'
import oneBeer from './../graphics/580b57fbd9996e24bc43c091.png'
import beerToGlass from './../graphics/beer-820011_640.jpg'

class Shops extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.setState({show: false});
  }

  private handleClose() {
    this.setState({ show: false });
  }

  private handleShow() {
    this.setState({ show: true });
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

    const cardStyle = {
      borderWidth: '3px'
    }

    return (
      <>
        <Jumbotron style={headerJumbotronStyle} fluid>
          <Container>
            <Card bg="light" border="warning" style={cardStyle} className="text-center p-4">
              <div className="grid-container">
                <div style={{ marginRight: "15px" }}>
                  <h1>Odwiedź nas na Górnickiego!</h1>
                  <Image onClick={this.handleShow} src={shopPhoto} style={{ width: '100%' }} rounded />
                </div>
                <iframe width="100%" height="400px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.1522285232337!2d17.05488071135112!3d51.11567543726553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d3d97cf061%3A0xc08116d71816dd97!2sG%C3%B3rnickiego+6%2C+50-337+Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1551622751662" frameBorder="0" style={{ paddingTop: '5px', border: "2px" }} allowFullScreen></iframe>
              </div>
            </Card>
          </Container>
        </Jumbotron>
        <Modal show={ this.state.show } onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sklep na ul. Górnickiego</Modal.Title>
          </Modal.Header>
          <Modal.Body><Image src={shopPhoto} style={{ width: '100%' }} rounded /></Modal.Body>
        </Modal>
      </>);
  }
}

export default Shops;