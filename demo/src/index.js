import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SimpleMap from './SimpleMap'
import Popups from './Popups'
import Markers from './Markers'
import MarkerIcon from './MarkerIcon'
import MarkerLabel from './MarkerLabel'
import GeometryCircle from './GeometryCircle'
import GeometryPolygons from './GeometryPolygons'

class Examples extends Component {
    render() {
        return (
          <div>
              <h2 id="simple-map">Simple map with editable zoom and center position <a href="#simple-map">#</a></h2>
              <SimpleMap/>

              <h2 id="popups">Popups <a href="#popups">#</a></h2>
              <Popups/>

              <h2 id="markers">Markers <a href="#markers">#</a></h2>

              <h3 id="markers-simple">Markers with popup <a href="#markers-simple">#</a></h3>
              <Markers/>

              <h3 id="markers-icon">Marker with Icon <a href="#markers-icon">#</a></h3>
              <MarkerIcon/>

              <h3 id="markers-label">Marker with Label <a href="#markers-label">#</a></h3>
              <MarkerLabel/>

              <h2 id="geometry">Geometry <a href="#geometry">#</a></h2>

              <h3 id="geometry-circle">Circle and Circle Marker <a href="#geometry-circle">#</a></h3>
              <GeometryCircle/>

              <h3 id="geometry-polygon">Polygon and Rectangle <a href="#geometry-polygon">#</a></h3>
              <GeometryPolygons/>
          </div>
        );
    };
}

const domElement = document.getElementById('demo');
ReactDOM.render(<Examples/>, domElement);
