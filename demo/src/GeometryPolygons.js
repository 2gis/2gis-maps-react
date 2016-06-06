import React, { Component } from 'react'
import { Map, Polygon, Rectangle } from '../../src/'

export default class GeometryPolygons extends Component {
    state = {
        zoom: 17,
        center: [54.9827, 82.8958],
        polygons: [],
        points: [
            [54.9827,82.8958],
            [54.9837,82.8968],
            [54.9837,82.8938]
        ],
        type: false // If is false then Polygon, if is true then Rectangle.
    };

    onChangePoints = e => {
        this.setState({
            points: JSON.parse(e.target.value)
        });
    };

    onChangePolygon = e => {
        if (e.target.value) {
            this.setState({
                type: false
            });
        }
    };

    onChangeRectangle = e => {
        if (e.target.value) {
            this.setState({
                type: true
            });
        }
    };

    addElement = e => {
        let polygons = this.state.polygons;
        const points = this.state.points;

        if (this.state.type) {
            polygons.push(
                <Rectangle
                    key={this.state.polygons.length}
                    bounds={points}
                    style={{
                        color: '#FF0000'
                    }}
                    label="I'm Rectangle."
                />
            );
        }
        else {
            polygons.push(
                <Polygon
                    key={this.state.polygons.length}
                    points={points}
                    label="I'm Polygon."
                />
            );
        }
        this.setState({
            polygons: polygons
        });
    };

    deleteElement = e => {
        let polygons = this.state.polygons;
        polygons.pop();
        this.setState({
            polygons: polygons
        });
    };

    render() {
        return (
            <div>
                <div>
                    <label style={{display: 'block'}}>{this.state.type ? 'Bounds (two points): ' : 'Points: '}</label>
                    <textarea
                        onChange={this.onChangePoints}
                        value={JSON.stringify(this.state.points)}
                        style={{
                            width: 300,
                            height: 100
                        }}
                    />
                </div>
                <br/>
                <input type="radio" name="type-polygon" checked={!this.state.type} value={!this.state.type} onChange={this.onChangePolygon}/> <label>Polygon</label>
                <br/>
                <input type="radio" name="type-polygon" checked={this.state.type} value={this.state.type} onChange={this.onChangeRectangle}/> <label>Rectangle</label>
                <br/>
                <button onClick={this.addElement}>Add element</button>
                <br/>
                <button onClick={this.deleteElement}>Delete element</button>
                <Map
                    style={{width: "500px", height: "500px"}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    { this.state.polygons }
                </Map>
            </div>
        );
    }
}
