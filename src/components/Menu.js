import React, { Component } from 'react'
import { Navbar,Button,Nav,NavDropdown,Form,FormControl,Col,Row,Glyphicon,Container  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Menu extends Component {
    render() {
        return (
            <header>
                <Navbar bg="light" expand="lg" className="pr-5 remove-padding-top-bottom">
                <Container>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}><Nav.Link href="#home" className="pr-5">Admin</Nav.Link></Col>
                    
                    </Row>
                </Container>
                </Navbar>
                <Navbar bg="light" expand="lg" className="pl-5 border-top remove-padding-top-bottom">
                    <Navbar.Brand href="#home"><img className="d-block w-60" src="./Logo-pequeño-01.png" alt="First slide"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto topnav">
                            <Nav.Link href="#home" >Guias de actividades</Nav.Link>
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
