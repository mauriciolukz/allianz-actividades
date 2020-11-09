import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import {BrowserRouter as Router,Link} from "react-router-dom";

class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Actividades: [],
            Items_Actividades: []
        };

    }

    componentDidMount() {
        let currentComponent = this;
        fetch('https://api-allianz-actividades.herokuapp.com/api/actividad')
        .then(function(response) {
            response.json().then(function(json) {
                currentComponent.setState({
                    Actividades: json.Actividades,
                    Items_Actividades: json.Items_Actividades
                  });
            });
        })
    }

    

    render() {
        
        const { Actividades, Items_Actividades } = this.state;

        const actividadList = this.state.Actividades.map((actividad, i) => {
            return (
                <Carousel.Item key={i}>
                    <img className="d-block w-100" src={`./${actividad.img_actividad}`} alt="First slide"/>
                    <Carousel.Caption>
                        <h2>{actividad.Desc_actividad}</h2>
                        <div className="row remove-padding-sides">
                            {
                                Items_Actividades.filter(Items_Actividades => Items_Actividades.actividad_id === actividad.actividad_id).map((Item, i) => {
                                    return (
                                        <div className="col remove-padding-sides">
                                            <div>
                                                <div>
                                                    <Link to={`${Item.actividad_id}/${Item.Id_item_actividad}/detalleactividad`} className="btn btn-default btn-circle" style={{backgroundColor: Item.color_item}}><img src={`./iconos/${Item.img_item}`} /></Link>
                                                </div>  
                                                <div>
                                                    <small>{Item.nombre_item}</small> 
                                                </div>
                                            </div>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        });

        return (
            <div>
                <Carousel>{actividadList}</Carousel>
            </div>
        )
    }
}

export default Banner;






