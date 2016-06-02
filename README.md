# React component Maps API 2GIS
### Not use this in production. Project in development

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

* Running `npm install` in the components's root directory will install everything you need for development.

## Demo Development Server

* `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

* `npm test` will run the tests once.
* `npm run test:watch` will run the tests on every change.

## Building

* `npm run build` will build the component for publishing to npm and also bundle the demo app.

* `npm run clean` will delete built resources.

[build-badge]: https://img.shields.io/travis/2gis/2gismaps-react/master.svg?style=flat-square
[build]: https://travis-ci.org/2gis/2gismaps-react

[npm-badge]: https://img.shields.io/npm/v/2gismaps-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/2gismaps-react

[coveralls-badge]: https://img.shields.io/coveralls/2gis/2gismaps-react/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/2gis/2gismaps-react


## Getting started
###### We recommend using ES7

##### Create simple map. [Api referense.](http://api.2gis.ru/doc/maps/manual/map/)

Map is the basic component. 
To create a specified center point , zoom level and size of dom element.

```jsx
import React, { Component } from 'react'
import { Map } from '2gis-maps-react'

class ExampleMap extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89]
    };

    onChangeZoom = e => {
        this.setState({
            zoom: e.target.value
        });
    };

    onChangeCenter = e => {
        this.setState({
            center: e.target.value.split(',')
        });
    };

    onZoomend = e => {
        this.setState({
            zoom: e.target.getZoom()
        });
    };

    onDrag = e => {
        this.setState({
            center: [
                e.target.getCenter().lat,
                e.target.getCenter().lng
            ]
        });
    };

    render() {
        return (
            <div>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onZoomend={this.onZoomend}
                    onDrag={this.onDrag}
                />
                <div>
                    <label>Zoom:</label>
                    <input onChange={this.onChangeZoom} value={this.state.zoom}/>
                </div>
                <div>
                    <label>Center:</label>
                    <input onChange={this.onChangeCenter} value={this.state.center}/>
                </div>
            </div>
        );
    }
}

```
