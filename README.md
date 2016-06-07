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

```jsx
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

##### Create popup inside map. [Api referense.](http://api.2gis.ru/doc/maps/examples/popups/)

Popup width change position and content.
For set maxWidth, minWith and maxHeight use prop sprawling.
[Demo](http://2gis.github.io/2gis-maps-react/#popups)

```jsx
class Popups extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89],
        popups: [],
        pos: [54.98, 82.89],
        popupContent: 'Hello world!',
        sprawling: false,
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null
    };

    onChangePos = e => {
        this.setState({
            pos: e.target.value.split(',')
        });
    };

    onChangePopupContent = e => {
        this.setState({
            popupContent: e.target.value
        });
    };

    onChangeSprawling = e => {
        this.setState({
            sprawling: !this.state.sprawling
        });
    };

    onChangeMaxWidth = e => {
        this.setState({
            maxWidth: e.target.value
        });
    };

    onChangeMinWidth = e => {
        this.setState({
            minWidth: e.target.value
        });
    };

    onChangeMaxHeight = e => {
        this.setState({
            maxHeight: e.target.value
        });
    };

    addPopup = () => {
        const pos = this.state.pos;
        const popupContent = this.state.popupContent;
        const sprawling = this.state.sprawling;
        const maxWidth = this.state.maxWidth;
        const minWidth = this.state.minWidth;
        const maxHeight = this.state.maxHeight;

        let popups = this.state.popups;

        popups.push(
            <Popup
                key={this.state.popups.length}
                pos={pos}
                sprawling={sprawling}
                maxWidth={maxWidth}
                minWidth={minWidth}
                maxHeight={maxHeight}
            >
                { popupContent }
            </Popup>
        );
        this.setState({
            popups: popups
        });
    };

    render() {
        return (
            <div>
                <div>
                    <label>Position: </label>
                    <input onChange={this.onChangePos} value={this.state.pos} style={{width: 100}}/>
                    <br/>
                    <div>
                        <label style={{display: 'block'}}>Popup content: </label>
                        <textarea onChange={this.onChangePopupContent} value={this.state.popupContent} style={{width: 400}}/>
                    </div>
                    <div>
                        <input type="checkbox" value={this.state.sprawling} onChange={this.onChangeSprawling}/><label>Sprawling</label>
                        <br/>
                        <label>Max width: </label><input disabled={!this.state.sprawling} onChange={this.onChangeMaxWidth} value={this.state.maxWidth} style={{width: 100}}/>
                        <br/>
                        <label>Min width: </label><input disabled={!this.state.sprawling} onChange={this.onChangeMinWidth} value={this.state.minWidth} style={{width: 100}}/>
                        <br/>
                        <label>Max height: </label><input disabled={!this.state.sprawling} onChange={this.onChangeMaxHeight} value={this.state.maxHeight} style={{width: 100}}/>
                    </div>
                    <br/>
                    <button onClick={this.addPopup}>Open popup</button>
                </div>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    { this.state.popups }
                </Map>
            </div>
        );
    }
}

```
