import React, { Component } from 'react'
import { Navbar,Button,Nav,NavDropdown,Form,FormControl,Col,Row,Glyphicon  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg" textAlign="right">
                    <Nav.Link href="#home" textAlign={"center"}>Admin</Nav.Link>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Allianz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Guias de actividades</Nav.Link>
                        <Nav.Link href="#home">Preguntas frecuentes</Nav.Link>
                        <Nav.Link href="#home">Novedades</Nav.Link>
                        <Nav.Link href="#home">Contacto</Nav.Link>
                        </Nav>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="4">
                                    <FontAwesomeIcon icon={faSearch} size="lg"/>
                                    Buscar
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}
