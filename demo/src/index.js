import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SimpleMap from './SimpleMap'
import Popups from './Popups'
import Markers from './Markers'
import GeometryCircle from './GeometryCircle'

class Examples extends Component {
    render() {
        return (
          <div>
              <h2 id="simple-map">Simple map with editable zoom and center position <a href="#simple-map">#</a></h2>
              <SimpleMap/>

              <h2 id="popups">Popups <a href="#popups">#</a></h2>
              <Popups/>

              <h2 id="markers">Markers <a href="#markers">#</a></h2>
              <Markers/>

              <h2 id="geometry">Geometry <a href="#geometry">#</a></h2>
              <h3 id="geometry-circle">Circle and Circle Marker <a href="#geometry-circle">#</a></h3>
              <GeometryCircle/>
          </div>
        );
    };
}

const domElement = document.getElementById('demo');
ReactDOM.render(<Examples/>, domElement);
