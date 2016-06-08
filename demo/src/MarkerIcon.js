import React, { Component } from 'react'
import { Map, Marker, Icon, DivIcon } from '../../src/'

export default class MarkerIcon extends Component {
    state = {
        zoom: 13,
        center: [54.98, 82.89],
        url: 'http://maps.api.2gis.ru/2.0/example_logo.png',
        size: [48, 48],
        html: '<a href="https://2gis.com">HTML-link</a>',
        insideMarker: []

    };

    onChangeUrl = e => {
        this.setState({
            url: e.target.value
        });
    };
    onChangeSize= e => {
        this.setState({
            size: [e.target.value.split(',')[0], e.target.value.split(',')[1]]
        });
    };

    onChangeHtml = e => {
        this.setState({
            html: e.target.value
        });
    };

    changeToImage = () => {
        this.setState({
            insideMarker: <Icon
                iconUrl={this.state.url}
                iconSize={this.state.size}
            />
        });
    };

    changeToDiv = () => {
        this.setState({
            insideMarker: <DivIcon
                iconSize={this.state.size}
                dangerouslySetInnerHTML={this.state.html}
            >
            </DivIcon>
        });
    };

    render() {
        return (
            <div>
                <div>
                    <label>Icon size: </label>
                    <input onChange={this.onChangeSize} value={this.state.size} />
                </div>

                <div>
                    <label>Image url: </label>
                    <input onChange={this.onChangeUrl} value={this.state.url} style={{width: 300}}/>
                </div>
                <div>
                    <label style={{display: 'block'}}>Div html: </label>
                    <textarea onChange={this.onChangeHtml} value={this.state.html} style={{width: 200, height: 60}}/>
                </div>

                <button onClick={this.changeToImage}>Change Icon to Image</button>
                <br/>
                <button onClick={this.changeToDiv}>Change Icon to Div</button>

                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    <Marker
                        pos={this.state.center}
                    >
                        { this.state.insideMarker }
                    </Marker>
                </Map>
            </div>
        );
    }
}
