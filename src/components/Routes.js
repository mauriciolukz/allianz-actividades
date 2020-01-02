import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import actividad from '../App';
import detalleActividad from './DetalleActividad';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={actividad} />
                <Route exact path="/:id_actividad/:id_item_actividad/detalleActividad" component={detalleActividad} />
            </Switch>
        </Router>
    );
}

export default App;