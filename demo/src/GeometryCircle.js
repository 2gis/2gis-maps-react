import React, { Component } from 'react'
import { Map, CircleMarker, Circle } from '../../src/'

export default class GeometryCircle extends Component {
    state = {
        zoom: 17,
        center: [54.9827, 82.8958],
        geometry: [],
        pos: [54.9827, 82.8958],
        radius: 100,
        type: false
    };

    onChangePos = e => {
        this.setState({
            pos: e.target.value.split(',')
        });
    };

    onChangeRadius = e => {
        this.setState({
            radius: e.target.value
        });
    };

    onChangeCircleType = e => {
        if (e.target.value) {
            this.setState({
                type: false
            });
        }
    };

    onChangeCircleMarkerType = e => {
        if (e.target.value) {
            this.setState({
                type: true
            });
        }
    };

    addElement = e => {
        let geometry = this.state.geometry;
        const pos = this.state.pos;
        const radius = this.state.radius;

        if (this.state.type) {
            geometry.push(
                <CircleMarker
                    key={this.state.geometry.length}
                    pos={pos}
                    radius={radius}
                    style={{
                        color: '#FF0000'
                    }}
                    label="I'm Circle Marker.<br/>My radius don't change when zooming.<br/>He in pixels."
                />
            );
        }
        else {
            geometry.push(
                <Circle
                    key={this.state.geometry.length}
                    pos={pos}
                    radius={radius}
                    label="I'm Circle.<br/>My radius change when zooming.<br/>He in meters."
                />
            );
        }
        this.setState({
            geometry: geometry
        });
    };

    deleteElement = e => {
        let geometry = this.state.geometry;
        geometry.pop();
        this.setState({
            geometry: geometry
        });
    };

    render() {
        return (
            <div>
                <label>Position: </label>
                <input onChange={this.onChangePos} value={this.state.pos} style={{width: 100}}/>
                <br/>
                <label>Radius </label>
                <input onChange={this.onChangeRadius} value={this.state.radius} style={{width: 50}}/>
                <label> {this.state.type ? 'pixels' : 'meters'}</label>
                <br/>
                <input type="radio" name="type" checked={!this.state.type} value={!this.state.type} onChange={this.onChangeCircleType}/> <label>Circle</label>
                <br/>
                <input type="radio" name="type" checked={this.state.type} value={this.state.type} onChange={this.onChangeCircleMarkerType}/> <label>Circle Marker</label>
                <br/>
                <button onClick={this.addElement}>Add element</button>
                <br/>
                <button onClick={this.deleteElement}>Delete element</button>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    { this.state.geometry }
                </Map>
            </div>
        );
    }
}
