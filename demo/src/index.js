import React, { Component, Children, cloneElement } from 'react'
import ReactDOM from 'react-dom'

import {
    Map, Marker, Popup, Icon, DivIcon, Ruler, GeoJSON,
    Wkt, Circle, Polyline, Polygon, CircleMarker, Rectangle
} from '../../src'

class ExampleMap extends Component {
    state = {
        center: [54.98, 82.89],
        zoom: 12,
        style: {
            width: '500px',
            height: '500px'
        },
        points: [
            [54.98, 82.9],
            [54.95, 82.93]
        ],
        lineStyle: {
            color: '#1111FF'
        },
        radius: 500,
        insideMarker: [],
        label: 'asdasdasd',
        draggable: false,
        onDrag: false
    };

    oneClick = e => {
        console.log('one Click');
    };

    oneDrag = e => {
        console.log('one Drag');
    };

    render() {
        return (
            <div>
                <Map
                    style={this.state.style}
                    center={ this.state.center }
                    zoom={this.state.zoom}
                    maxZoom={16}
                    minZoom={10}
                    onClick={this.oneClick}
                    onDrag={this.state.onDrag}
                >
                    <Polyline
                        points={this.state.points}
                        style={this.state.lineStyle}
                        label={'123123'}
                    >
                        <Popup>
                            Sed consequat, leo eget bibendum sodales,
                            augue velit cursus nunc, quis gravida magna mi a libero.
                            Praesent vestibulum dapibus nibh. Curabitur vestibulum aliquam leo.
                        </Popup>
                    </Polyline>
                </Map>
                <button
                    onClick={() => {
                        let newState = this.state;

                        newState.onDrag = this.oneDrag;

                         //newState.

                        this.setState(newState);
                    }}
                    >
                    One
                </button>
                <button
                    onClick={() => {
                        let newState = this.state;

                        newState.points = [
                                            [54.98, 82.9],
                                            [54.95, 82.95]
                                        ];

                         newState.lineStyle = {
                            color: '#FFAA00'
                         };

                        this.setState(newState);
                    }}>
                    Two
                </button>
            </div>
        );
    }
}

const domElement = document.getElementById('demo');
ReactDOM.render(<ExampleMap/>, domElement);
