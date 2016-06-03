import React, { Component } from 'react'
import { Map, Marker, Popup } from '../../src/'

export default class Markers extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89],
        markers: [],
        pos: [54.98, 82.89],
        draggable: false,
        withPopup: false,
        popupContent: 'Hello world!'
    };

    onChangePos = e => {
        this.setState({
            pos: e.target.value.split(',')
        });
    };

    onChangeDraggable = () => {
        this.setState({
            draggable: !this.state.draggable
        });
    };

    onChangeWithPopup = () => {
        this.setState({
            withPopup:!this.state.withPopup
        });
    };

    onChangePopupContent = e => {
        this.setState({
            popupContent: e.target.value
        });
    };

    addMarker = () => {
        let markers = this.state.markers;
        const pos = this.state.pos;
        const draggable = this.state.draggable;
        const popupContent = this.state.popupContent;
        let popup = null;
        if (this.state.withPopup) {
            popup = (
                <Popup>
                    { popupContent }
                </Popup>
            );
        }
        markers.push(
            <Marker
                key={this.state.markers.length}
                draggable={draggable}
                pos={pos}
            >
                { popup }
            </Marker>
        );
        this.setState({
            markers: markers
        });
    };

    removeMarker = () => {
        let markers = this.state.markers;
        markers.pop();
        this.setState({
            markers: markers
        });
    };

    render() {
        return (
            <div>
                <div>
                    <label>Position: </label>
                    <input onChange={this.onChangePos} value={this.state.pos} style={{width: 100}}/>
                    <button onClick={this.addMarker}>Add marker</button>
                </div>
                <div>
                    <div>
                        <input type="checkbox" value={this.state.draggable} onChange={this.onChangeDraggable}/><label>Draggable</label>
                    </div>
                    <div>
                        <input type="checkbox" value={this.state.withPopup} onChange={this.onChangeWithPopup}/><label>Popup</label>
                    </div>
                    <div>
                        <label>Popup content: </label>
                        <input onChange={this.onChangePopupContent} disabled={!this.state.withPopup} value={this.state.popupContent} style={{width: 400}}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.removeMarker} disabled={!this.state.markers.length}>Remove marker</button>
                </div>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    { this.state.markers }
                </Map>
            </div>
        );
    }
}
