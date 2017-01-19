# React component [Maps API 2GIS](https://github.com/2gis/mapsapi)

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Installation

For installation use command `npm install 2gis-maps-react 2gis-maps`

[build-badge]: https://travis-ci.org/2gis/2gis-maps-react.svg?branch=master
[build]: https://travis-ci.org/2gis/2gis-maps-react

[npm-badge]: https://img.shields.io/npm/v/2gis-maps-react.svg?style=flat-square
[npm]: https://www.npmjs.org/package/2gis-maps-react

[coveralls-badge]: https://coveralls.io/repos/github/2gis/2gismaps-react/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/2gis/2gismaps-react?branch=master


## Getting started

##### Demo

[Demo](http://2gis.github.io/2gis-maps-react/#simple-map)  
[Source code of the demo](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/SimpleMap.js)  

##### Creation of simple map. [Api referense.](http://api.2gis.ru/doc/maps/manual/map/)

A map is a basic component. 
For creating the map you need to specify center point, zoom level and size of dom element.  
  
```jsx
  <Map
      style={{width: "500px", height: "500px"}}
      center={[54.98, 82.89]}
      zoom={13}
  />
```
  
##### Creation of popup inside the map. [Api referense.](http://api.2gis.ru/doc/maps/examples/popups/)

A simple popup. 
For setting of maxWidth, minWith and maxHeight use prop sprawling. [Demo](http://2gis.github.io/2gis-maps-react/#popups)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Popups.js) 

```jsx
  <Map
      style={{width: "500px", height: "500px"}}
      center={[54.98, 82.89]}
      zoom={13}
  >
    <Popup
        pos={[54.98, 82.89]}
    >
       The content for popup
        <h3>Can be HTML</h3>
    </Popup>
  </Map>
```
  
##### Creation of Markers and Popups on Markers. [Api referense.](http://api.2gis.ru/doc/maps/examples/markers/)

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
Popups on Markers. [Demo](http://2gis.github.io/2gis-maps-react/#markers-simple)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/Markers.js)

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
                The content for popup
                <h3>Can be HTML</h3>
            </Popup>
        </Marker>
    </Map>
```  

Marker with icon and html icon. [Demo](http://2gis.github.io/2gis-maps-react/#markers-icon)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/MarkerIcon.js)
  
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

##### Creating of vector objects. [Api referense.](http://api.2gis.ru/doc/maps/examples/geometries/)

Circle and Circle Marker. [Demo](http://2gis.github.io/2gis-maps-react/#geometry-circle)  [Source code](https://github.com/2gis/2gis-maps-react/blob/master/demo/src/GeometryCircle.js)
  
```jsx
    <Map
        style={{width: "500px", height: "500px"}}
        center={[54.98, 82.89]}
        zoom={13}
    >
        <CircleMarker
            pos={[54.98, 82.89]}
            label={'I\'m Circle Marker.<br/>My radius doesn't change when zooming.<br/>He in pixels.'}
            radius={50}
        />
        
        <Circle
            pos={[54.98, 82.895]}
            label={'I\'m Circle.<br/>My radius changes when zooming.<br/>He in meters'}
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
        
        <Rectangle bounds={[
                        [54.9827238554242, 82.89354085922243],
                        [54.98205895253545, 82.89488196372986]
                    ]}
                        style={{
                            color: '#FF0000'
                    }}
                />
    </Map>
```

### Events

For binding 2gis-mapsapi events use props similar to `onEvent` where Event is 2gis-mapsapi event with a capital first character. 

### Components

#### Map

Required props

|Prop name        |Dynamic|Description                              | Data example |
|-----------------|:-----:|-----------------------------------------|--------------|
| center          |   ✓   |Center position of map                   |[54.98, 82.89]|
|  zoom           |   ✓   |Zoom level of map                        |15            |

Optional props

|Prop name        |Dynamic|Description                              | Data example                     |Default value|
|-----------------|:-----:|-----------------------------------------|--------------------------------- |:-----------:|
| minZoom         |   ✘   |Minimal zoom level                       |10                                | null        |
| maxZoom         |   ✘   |Maximal zoom level                       |20                                | null        |
|maxBounds        |   ✘   |Bounds of map                            |[ [54.98, 82.89], [54.98, 82.89] ]| null        |
|  style          |   ✓   |CSS style of map container               |{width: "500px", height: "500px"} | null        |
|geoclicker       |   ✘   |Show popup on click about place on map   |true                              | false       |
|projectDetector  |   ✘   |Load current user project                |true                              | false       |
|zoomControl      |   ✘   |Show zoom control button                 |false                             | true        |
|fullscreenControl|   ✘   |Show fullscreen control button           |false                             | true        |
|preferCanvas     |   ✘   |Use canvas element for rendering geometry|false                             | true        |
|touchZoom        |   ✘   |Zooming when touch (on mobile)           |false                             | true        |
|scrollWheelZoom  |   ✘   |Zooming when scrolling                   |false                             | true        |
|doubleClickZoom  |   ✘   |Zooming when double click                |false                             | true        |
|dragging         |   ✘   |Dragging map                             |false                             | true        |

#### Popup

Can be bound to Marker, Map, Polygon, Polyline, Rectangle.

Required props

|Prop name|Dynamic|Description                                              | Data example |
|---------|:-----:|---------------------------------------------------------|--------------|
|   pos   |   ✓   |Position on map (not use if popup inside another element)|[54.98, 82.89]|

Optional props

|Prop name|Dynamic|Description                    | Data example |Default value|
|---------|:-----:|-------------------------------|--------------|:-----------:|
|className|   ✘   |Class name of popup dom element|example-string| -           |
|maxWidth |   ✘   |Max width of popup             |      150     |    300      |
|minWidth |   ✘   |Min width of popup             |      150     |    50       |
|maxHeight|   ✘   |Max height of popup            |      150     |    null     |
|sprawling|   ✘   |Popup width on map width       |      true    |    false    |

#### Marker

Required props

|Prop name|Dynamic|Description    | Data example |
|---------|:-----:|---------------|--------------|
|   pos   |   ✓   |Position on map|[54.98, 82.89]|

Optional props

|Prop name  |Dynamic|Description                                | Data example |Default value|
|-----------|:-----:|-------------------------------------------|--------------|:-----------:|
|   label   |   ✓   |Text of marker label                       |[54.98, 82.89]| -           |
|staticLabel|   ✓   |Text of marker label. Label will be static.|[54.98, 82.89]| -           |
| draggable |   ✓   |Marker is draggable                        |     true     |    false    |
| clickable |   ✓   |Marker is clickable                        |     false    |    true     |

#### Icon

Can be inside Marker.

Required props

|Prop name|Dynamic|Description | Data example                                |
|---------|:-----:|------------|---------------------------------------------|
| iconUrl |   ✓   |Url of icon |http://maps.api.2gis.ru/2.0/example_logo.png |
| iconSize|   ✓   |Size of icon|[48, 48]                                     |

#### DivIcon

Can be inside Marker.

Required props

|Prop name              |Dynamic|Description | Data example                                |Default value|
|-----------------------|:-----:|------------|---------------------------------------------|:-----------:|
| iconSize              |   ✓   |Size of icon|[48, 48]                                     | -           |
|dangerouslySetInnerHTML|   ✓   | Inner html |http://maps.api.2gis.ru/2.0/example_logo.png | -           |

#### Ruler

Required props

|Prop name|Dynamic|Description     |                    Data example                           |
|---------|:-----:|----------------|-----------------------------------------------------------|
|  points |   ✓   |Points of ruler |[ [54.9827,82.8958], [54.9837,82.8968], [54.9837,82.8938] ]|

#### Polyline

Required props

|Prop name|Dynamic|Description     |                    Data example                           |
|---------|:-----:|----------------|-----------------------------------------------------------|
|  points |   ✓   |Points of line  |[ [54.9827,82.8958], [54.9837,82.8968], [54.9837,82.8938] ]|

Optional props

|Prop name|Dynamic|Description     |          Data example          |Default value|
|---------|:-----:|----------------|--------------------------------|:-----------:|
|  label  |   ✓   |Text of label   |example-string                  | -           |
|  style  |   ✓   |Style of line   |{color: '#FF0000'}              | -           |

#### Polygon

Required props

|Prop name|Dynamic|Description       |                    Data example                           |
|---------|:-----:|------------------|-----------------------------------------------------------|
|  points |   ✓   |Points of polygon |[ [54.9827,82.8958], [54.9837,82.8968], [54.9837,82.8938] ]|

Optional props

|Prop name|Dynamic|Description     |     Data example      |Default value|
|---------|:-----:|----------------|-----------------------|:-----------:|
|  label  |   ✓   |Text of label   |example-string         | -           |
|  style  |   ✓   |Style of line   |{color: '#FF0000'}     | -           |

#### Rectangle

Required props

|Prop name|Dynamic|Description         |               Data example             |
|---------|:-----:|--------------------|----------------------------------------|
|  bounds |   ✓   |Bounds of rectangle |[ [54.9827,82.8958], [54.9837,82.8968] ]|

Optional props

|Prop name|Dynamic|Description     |     Data example      |Default value|
|---------|:-----:|----------------|-----------------------|:-----------:|
|  label  |   ✓   |Text of label   |example-string         | -           |
|  style  |   ✓   |Style of line   |{color: '#FF0000'}     | -           |

#### Circle

Required props

|Prop name|Dynamic|Description            |    Data example   |
|---------|:-----:|-----------------------|-------------------|
|   pos   |   ✓   |Position on map        | [54.9827,82.8958] |
| radius  |   ✓   |Circle radius in meters|       300         |

Optional props

|Prop name|Dynamic|Description     |     Data example      |Default value|
|---------|:-----:|----------------|-----------------------|:-----------:|
|  label  |   ✓   |Text of label   |example-string         | -           |
|  style  |   ✓   |Style of line   |{color: '#FF0000'}     | -           |

#### CircleMarker

Required props

|Prop name|Dynamic|Description            |    Data example   |
|---------|:-----:|-----------------------|-------------------|
|   pos   |   ✓   |Position on map        | [54.9827,82.8958] |

Optional props

|Prop name|Dynamic|Description            |     Data example      |Default value|
|---------|:-----:|-----------------------|-----------------------|:-----------:|
| radius  |   ✓   |Circle radius in pixels|         300           |     10      |
|  label  |   ✓   |Text of label          |example-string         | -           |
|  style  |   ✓   |Style of line          |{color: '#FF0000'}     | -           |

#### Wkt

Required props

|Prop name|Dynamic|Description            |                         Data example                        |
|---------|:-----:|-----------------------|-------------------------------------------------------------|
|   data  |   ✓   |Wkt data string        | POLYGON((82.9155.04, 82.91 55.04, 82.91 55.04, 82.9155.04)) |

Optional props

|Prop name|Dynamic|Description            |    Data example   |Default value|
|---------|:-----:|-----------------------|-------------------|:-----------:|
|  style  |   ✓   |Style of objeck        | {color: '#FF0000'}| -           |

#### GeoJSON

Required props

|Prop name|Dynamic|Description            |                                                                          Data example                                                                          |
|---------|:-----:|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   data  |   ✓   |GeoJSON data object    | { "type": "Feature", "properties": { "address": "г. Новосибирск, пл. Карла Маркса, 7" }, "geometry": { "type": "Point", "coordinates": [82.8974, 54.9801] } }; |

Optional props

| Prop name   |Dynamic|Description                      |    Data example   |Default value               |
|-------------|:-----:|---------------------------------|-------------------|:--------------------------:|
|pointToLayer |   ✓   |Function for render point        |   function() {}   |Will be render simple Marker|
|onEachFeature|   ✓   |Function running on every element|   function() {}   | -                          |
|    filter   |   ✓   |Function for filter objects      |   function() {}   | -                          |
|    style    |   ✓   |Style of object                  | {color: '#FF0000'}| -                          |

## Demo Development Server

* `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Building

* `npm run build` will build the component for publishing to npm and also bundle the demo app.

* `npm run clean` will delete built resources.
