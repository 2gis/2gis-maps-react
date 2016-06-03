import React, { Component } from 'react'
import { Map, Popup } from '../../src/'

export default class Popups extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89],
        popups: [],
        pos: [54.98, 82.89],
        popupContent: 'Hello world!'
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

    addPopup = () => {
        const pos = this.state.pos;
        const popupContent = this.state.popupContent;
        let popups = this.state.popups;
        popups.push(
            <Popup
                key={this.state.popups.length}
                pos={pos}
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
                    <label>Popup content: </label>
                    <input onChange={this.onChangePopupContent} value={this.state.popupContent} style={{width: 400}}/>
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
