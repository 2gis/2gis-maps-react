# React component Maps API 2GIS
### Not use this in production. Project in development

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

* Running `npm install` in the components's root directory will install everything you need for development.

[build-badge]: https://img.shields.io/travis/2gis/2gismaps-react/master.svg?style=flat-square
[build]: https://travis-ci.org/2gis/2gismaps-react

[npm-badge]: https://img.shields.io/npm/v/2gismaps-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/2gismaps-react

[coveralls-badge]: https://img.shields.io/coveralls/2gis/2gismaps-react/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/2gis/2gismaps-react

## Docs

##### Create simple map. [Api referense.](http://api.2gis.ru/doc/maps/manual/map/)

Map is the basic component. 
To create a specified center point , zoom level and size of dom element. [Demo](http://2gis.github.io/2gis-maps-react/#simple-map)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/SimpleMap.js)
  
```jsx
  <Map
      style={{width: "500px", height: "500px"}}
      center={[54.98, 82.89]}
      zoom={13}
  />
```
  
##### Create popup inside map. [Api referense.](http://api.2gis.ru/doc/maps/examples/popups/)

Simple popup. 
For set maxWidth, minWith and maxHeight use prop sprawling. [Demo](http://2gis.github.io/2gis-maps-react/#popups)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Popups.js) 

```jsx
  <Map
      style={{width: "500px", height: "500px"}}
      center={[54.98, 82.89]}
      zoom={13}
  >
    <Popup
        pos={[54.98, 82.89]}
    >
        Some content for popup
        <h3>Can be HTML</h3>
    </Popup>
  </Map>
```
  
##### Create Markers and Popups inside Markers. [Api referense.](http://api.2gis.ru/doc/maps/examples/markers/)

Simple Marker

```jsx
  <Map
      style={{width: "500px", height: "500px"}}
      center={[54.98, 82.89]}
      zoom={13}
  >
    <Marker
        pos={[54.98, 82.89]}
    />
  </Map>
```

Static and draggable markers.
Marker with popup inside. [Demo](http://2gis.github.io/2gis-maps-react/#markers-simple)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Markers.js)

```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <Marker
            pos={[54.98, 82.89]}
            staticLabel={'You can drag me.'}
            draggable={true}
        />
        <Marker
                    pos={[54.98, 82.895]}
                >
                    <Popup>
                        Some content for popup
                        <h3>Can be HTML</h3>
                    </Popup>
        </Marker>
    </Map>
```  

Marker with icon and html icon inside. [Demo](http://2gis.github.io/2gis-maps-react/#markers-icon)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/MarkerIcon.js)
  
```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <Marker
            pos={[54.98, 82.89]}
        >
            <Icon
                iconUrl={'http://maps.api.2gis.ru/2.0/example_logo.png'}
                iconSize={[54.98, 82.89]}
            />
        </Marker>
        
        <Marker
            pos={[54.98, 82.895]}
        >
            <DivIcon
                iconSize={[54.98, 82.89]}
            >
                <h2>Can be HTML</h2>
            </DivIcon>
        </Marker>
    </Map>
```  

Marker with label and static label. [Demo](http://2gis.github.io/2gis-maps-react/#markers-label)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/MarkerLabel.js)

```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <Marker
            pos={[54.98, 82.89]}
            label={'I\'m label.'}
        />
        
        <Marker
            pos={[54.98, 82.895]}
            staticLabel={'I\'m static label.'}
        />
    </Map>
```  

##### Create geometry. [Api referense.](http://api.2gis.ru/doc/maps/examples/geometries/)

Circle and Circle Marker. [Demo](http://2gis.github.io/2gis-maps-react/#geometry-circle)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/GeometryCircle.js)
  
```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <CircleMarker
            pos={[54.98, 82.89]}
            label={'I\'m Circle Marker.<br/>My radius don't change when zooming.<br/>He in pixels.'}
            radius={50}
        />
        
        <Circle
            pos={[54.98, 82.895]}
            label={'I\'m Circle.<br/>My radius change when zooming.<br/>He in meters'}
            radius={200}
        />
    </Map>
```
  
Polygon, Polyline and Rectangle. [Demo](http://2gis.github.io/2gis-maps-react/#geometry-polygon)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/GeometryPolygons.js) 
 
```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <Polyline points={[
                [54.9827,82.8958],
                [54.9837,82.8968],
                [54.9837,82.8938]
            ]}
        />
        
        <Polygon points={[
                [54.98214514427189, 82.89540767669679],
                [54.981683400666896, 82.89724230766298],
                [54.982754637698605, 82.89746761322023]
            ]}
                style={{
                    color: '#00FF00'
            }}
        />
        
        <Rectangle points={[
                        [54.9827238554242, 82.89354085922243],
                        [54.98205895253545, 82.89488196372986]
                    ]}
                        style={{
                            color: '#FF0000'
                    }}
                />
    </Map>
```
   
## Demo Development Server

* `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

* `npm run build` will build the component for publishing to npm and also bundle the demo app.

* `npm run clean` will delete built resources.
