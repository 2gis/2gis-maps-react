import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SimpleMap from './SimpleMap'
import Popups from './Popups'
import Markers from './Markers'

class Examples extends Component {
    render() {
        return (
          <div>
              <h2>Simple map with editable zoom and center position</h2>
              <SimpleMap/>

              <h2>Popups</h2>
              <Popups/>

              <h2>Markers</h2>
              <Markers/>
          </div>
        );
    };
}

const domElement = document.getElementById('demo');
ReactDOM.render(<Examples/>, domElement);
