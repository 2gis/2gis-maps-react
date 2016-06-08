import React, { Component } from 'react'
import { Map } from '../../src/'

export default class SimpleMap extends Component {
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
                <div>
                    <label>Zoom: </label>
                    <input onChange={this.onChangeZoom} value={this.state.zoom} style={{width: 30}}/>
                </div>
                <div>
                    <label>Center: </label>
                    <input onChange={this.onChangeCenter} value={this.state.center} style={{width: 300}}/>
                </div>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onZoomend={this.onZoomend}
                    onDrag={this.onDrag}
                />
            </div>
        );
    }
}
