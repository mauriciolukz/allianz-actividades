import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { ReactSVG } from 'react-svg'
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCar,faSearch } from '@fortawesome/free-solid-svg-icons'

class Banner extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./home-sombrilla.jpeg" alt="First slide"/>
                        <Carousel.Caption>
                            <h2>Guias de actividades autónomas</h2>
                            <button type="button" class="btn btn-default btn-circle btn-xl" style={{backgroundColor: 'white'}}><FontAwesomeIcon icon={faCoffee} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCoffee} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCoffee} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCoffee} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCoffee} size="lg" color="green"/></button>
                            <p>Detalle de actividades autonomas.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="./home-sombrilla.jpeg" alt="Third slide"/>
                        <Carousel.Caption>
                            <h2>Guias de actividades corredores</h2>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCar} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCar} size="lg" color="green"/></button>
                            <button type="button" class="btn btn-danger btn-circle btn-xl"><FontAwesomeIcon icon={faCar} size="lg" color="green"/></button>
                            <p>Detalle de actividades corredores.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Banner;
