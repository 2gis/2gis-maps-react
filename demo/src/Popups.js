import React, { Component } from 'react'
import { Map, Popup } from '../../src/'

export default class Popups extends Component {
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
