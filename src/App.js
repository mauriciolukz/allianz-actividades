import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Menu/>
      <main role="main">
        <Banner/>
        
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-center">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              </div>
              <h2 className="text-center">Guias de actividades</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-default default-color-link" href="#" role="button">Conoce mas &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              </div>
              <h2 className="text-center">Preguntas frecuentes</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-default default-color-link" href="#" role="button">Conoce mas &raquo;</a></p>
              </div>
            <div className="col-lg-4">
              <div className="text-center">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              </div>
              <h2 className="text-center">Novedades</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-default default-color-link" href="#" role="button">Conoce mas &raquo;</a></p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
