import React, { Component } from 'react'
import { Col,Row,Form,Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class DetalleActividad extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Actividad: [],
            Items_Actividad: [],
            Generalidades_items: []
        }

        this.handleItem = this.handleItem.bind(this);
    }

    componentDidMount() {
        let currentComponent = this;
        fetch('http://api-allianz-actividades.test/api/actividad/' + this.props.match.params.id_actividad + "/" + this.props.match.params.id_item_actividad)
        .then(function(response) {
            response.json().then(function(json) {
                console.log(json);
                currentComponent.setState({
                    Actividad: json.Actividades,
                    Items_Actividad: json.Items_Actividades,
                    Generalidades_items: json.Generalidades_items
                  });
            });
        })
    }

    handleItem(e) {
        let currentComponent = this;
        fetch('http://api-allianz-actividades.test/api/generalidadItems/' + e)
        .then(function(response) {
            response.json().then(function(json) {
                console.log(json);
                currentComponent.setState({
                    Generalidades_items: json.Generalidades_items
                }); 
            });
        })
    }
    
    render() {
        const { Actividad, Items_Actividad,Generalidades_items } = this.state;

        return (
            <div className="container-fluid">
                <Row className="border-bottom">
                    <Col sm={8}>
                        <h2 className="default-color-link">{Actividad.Desc_actividad}</h2>
                    </Col>
                    <Col sm={4} className="border-left">
                        <img className="d-block w-60" src="./../../Logo-pequeño-01.png" alt="First slide"/>
                    </Col>
                </Row>
                <Row className="border-bottom pt-5 pl-5">
                    <Col sm={8}>
                        <Row>
                            {
                                Items_Actividad.map((item) =>
                                    <div className="col remove-padding-sides">
                                        <div>
                                            <a onClick={(e) => this.handleItem(item.Id_item_actividad, e)} href="javascript:void(0)" className="btn btn-default btn-circle" style={{backgroundColor: item.color_item}}><img src={`./../../iconos/${item.img_item}`} /></a>
                                        </div>
                                        <div>
                                            <small>{item.nombre_item}</small> 
                                        </div>
                                    </div>
                                )
                            }
                        </Row>
                        
                        <Row className="pt-3">
                            <Col sm={8}>
                                {
                                    Items_Actividad.filter(Items_Actividades => Items_Actividades.Id_item_actividad === 3).map((Item, i) => {
                                        return (
                                            <h2 style={{color: "#F6C4CD"}}>{Item.nombre_item}</h2>
                                        )
                                    })
                                
                                }
                            </Col>
                            <Col sm={4} className="border-left">
                                <Form>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="4">
                                            <FontAwesomeIcon icon={faSearch} size="lg"/>
                                            Buscar
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control type="text" placeholder="Emisión negocio" />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Table striped bordered hover>
                                <thead style={{backgroundColor: '#F6C4CD',color: '#FFFFFF'}}>
                                    <tr>
                                        <th>Actividad</th>
                                        <th>Definición </th>
                                        <th>Cómo se solicita</th>
                                        <th>Web Service</th>
                                        <th>Buzones funcionales</th>
                                        <th>Nivel de sevicio</th>
                                        <th>Soporte</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Generalidades_items.map((generalidad, i) => {
                                            return (
                                                <tr>
                                                    <td>{generalidad.Desc_generalidad}</td>
                                                    <td>{generalidad.Desc_generalidad}</td>
                                                    <td>{generalidad.Plus}</td>
                                                    <td>{generalidad.web_service}</td>
                                                    <td>{generalidad.buzones_funcionales}</td>
                                                    <td>{generalidad.nivel_servicio}</td>
                                                    <td><a>ver soporte</a></td>
                                                </tr>
                                            )
                                        })
                                    
                                    }
                                </tbody>
                            </Table>
                        </Row>

                    </Col>
                    <Col sm={4}>
                        
                            
                        {
                            Items_Actividad.filter(Items_Actividades => Items_Actividades.Id_item_actividad === 3).map((Item, i) => {
                                return (
                                    <h5 style={{color: "#F6C4CD"}}>MENU ACTIVIDADES {Item.nombre_item.toUpperCase()}</h5>
                                )
                            })
                        
                        }
                        
                        <ul>
                            {
                                Generalidades_items.map((generalidad, i) => {
                                    return (
                                        <li>{generalidad.Desc_generalidad}</li>
                                    )
                                })
                            
                            }
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DetalleActividad;
