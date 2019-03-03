import React, { Component } from 'react';
import { Button, ButtonToolbar, Jumbotron, Container, Row, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Johnny Promil</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link href="#home">Główna</Nav.Link>
                <Nav.Link href="#link">Oferta</Nav.Link>
                <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Jumbotron fluid>
          <Container>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
