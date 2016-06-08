import React, { Component } from 'react'
import { Map, Marker, Popup } from '../../src/'

export default class MarkerLabel extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89],
        markers: [],
        pos: [54.98, 82.89],
        staticLabel: false,
        labelContent: 'I\'m Label!'
    };

    onChangePos = e => {
        this.setState({
            pos: e.target.value.split(',')
        });
    };

    onChangeStaticLabel = () => {
        this.setState({
            staticLabel:!this.state.staticLabel
        });
    };

    onChangeLabelContent = e => {
        this.setState({
            labelContent: e.target.value
        });
    };

    addMarker = () => {
        let markers = this.state.markers;
        const pos = this.state.pos;
        const labelContent = this.state.labelContent;

        let staticLabel = false;
        let label = false;

        if (this.state.staticLabel) {
            staticLabel = labelContent;
        }
        else {
            label = labelContent;
        }

        markers.push(
            <Marker
                pos={pos}
                label={label}
                staticLabel={staticLabel}
            />
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
                </div>
                <div>
                    <div>
                        <input type="checkbox" value={this.state.withPopup} onChange={this.onChangeStaticLabel}/> <label>Static label</label>
                    </div>
                    <div>
                        <label style={{display: 'block'}}>Label content (you can use html): </label>
                        <textarea onChange={this.onChangeLabelContent} value={this.state.labelContent} style={{width: 400}}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addMarker}>Add marker</button>
                    <br/>
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
