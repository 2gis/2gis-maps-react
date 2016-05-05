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

##### Create simple map.
```jsx
import React, { Component } from 'react'
import { Map } from '2gismaps-react'

class RenderElement extends Component {
    render() {
        return (<Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13} />);
    }
}

```

##### Create simple Marker and Marker with label.
```jsx
import React, { Component } from 'react'
import { Map, Marker } from '2gismaps-react'

class RenderElement extends Component {
    render() {
        return (<Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
                    <Marker pos={[54.95, 82.82]} />
                            
                    <Marker pos={[54.93, 82.89]} label={ text: 'I'm label' }>
                    
                    <Marker pos={[54.98, 82.89]} label={ text: 'I'm label', static: true }>
                </Map>);
    }
}

```

##### Create simple Popup and Popup inside Marker
```jsx
import React, { Component } from 'react'
import { Map, Marker, Popup } from '2gismaps-react'

class RenderElement extends Component {
    render() {
        return (<Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
                        <Popup pos={[54.96, 82.9]}>
                            <h2>Vestibulum eu odio.</h2>
                            <p>Morbi mattis ullamcorper velit.</p>
                        </Popup>
                        
                        <Marker pos={[54.98, 82.89]}>
                            <Popup>
                                <h2>Vestibulum eu odio.</h2>
                                <p>Morbi mattis ullamcorper velit.</p>
                            </Popup>
                        </Marker>
                    </Map>);
    }
}

```

##### Create Ruler on map.
```jsx
import React, { Component } from 'react'
import { Map, Ruler } from '2gismaps-react'

class RenderElement extends Component {
    render() {
        return (<Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
                        <Ruler points={[
                                       [51.7314, 36.1938],
                                       [51.7307, 36.1894],
                                       [51.7297, 36.1926],
                                       [51.7299, 36.1968],
                                       [51.7307, 36.1968]]}
                                       />
                    </Map>);
    }
}

```

##### Create different geometries: Circle, Polygon and Path.
```jsx
import React, { Component } from 'react'
import { Map, Ruler } from '2gismaps-react'

class RenderElement extends Component {
    render() {
        return (<Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
                        <Circle center={[51.7299, 36.1968]} radius={}>
                        
                        <Polygon points={[
                                            [51.7314, 36.1938],
                                            [51.7307, 36.1894],
                                            [51.7297, 36.1926],
                                            [51.7299, 36.1968],
                                            [51.7307, 36.1968]]}
                                            />
                        <Path points={[
                                       [51.7314, 36.1938],
                                       [51.7307, 36.1894],
                                       [51.7297, 36.1926],
                                       [51.7299, 36.1968],
                                       [51.7307, 36.1968]]}
                                       />
                    </Map>);
    }
}

```
