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
[Demo](http://2gis.github.io/2gis-maps-react/#simple-map)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/SimpleMap.js)  

##### Create popup inside map. [Api referense.](http://api.2gis.ru/doc/maps/examples/popups/)

Popup width change position and content.
For set maxWidth, minWith and maxHeight use prop sprawling.  
[Demo](http://2gis.github.io/2gis-maps-react/#popups)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Popups.js)  


##### Create Markers and Popups inside Markers. [Api referense.](http://api.2gis.ru/doc/maps/examples/markers/)

Static and draggable markers.
Marker with popup inside.  
[Demo](http://2gis.github.io/2gis-maps-react/#markers-simple)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Markers.js)  

Marker with icon and html icon inside.  
[Demo](http://2gis.github.io/2gis-maps-react/#markers-icon)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/MarkerIcon.js)  

Marker with label and static label.  
[Demo](http://2gis.github.io/2gis-maps-react/#markers-label)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/MarkerLabel.js)  

##### Create geometry. [Api referense.](http://api.2gis.ru/doc/maps/examples/geometries/)

Circle and Circle Marker.  
[Demo](http://2gis.github.io/2gis-maps-react/#geometry-circle)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/GeometryCircle.js)  

Polygon, Polyline and Rectangle .  
[Demo](http://2gis.github.io/2gis-maps-react/#geometry-polygon)  
[Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/GeometryPolygons.js)  
