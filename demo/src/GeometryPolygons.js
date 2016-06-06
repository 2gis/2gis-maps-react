import React, { Component } from 'react'
import { Map, Polygon, Rectangle , Polyline} from '../../src/'

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
        type: 0 // If is 0 then Line, if is 1 then Polygon, if is 2 then Rectangle.
    };

    onChangePoints = e => {
        this.setState({
            points: JSON.parse(e.target.value)
        });
    };

    onChangeLine = e => {
        if (e.target.value) {
            this.setState({
                type: 0
            });
        }
    };

    onChangePolygon = e => {
        if (e.target.value) {
            this.setState({
                type: 1
            });
        }
    };

    onChangeRectangle = e => {
        if (e.target.value) {
            this.setState({
                type: 2
            });
        }
    };

    addElement = e => {
        let polygons = this.state.polygons;
        const points = this.state.points;

        switch (this.state.type) {
            case 0:
                polygons.push(
                    <Polyline
                        key={this.state.polygons.length}
                        points={points}
                        label="I'm Polyline."
                    />
                );
                break;
            case 1:
                polygons.push(
                    <Polygon
                        key={this.state.polygons.length}
                        points={points}
                        label="I'm Polygon."
                        style={{
                            color: '#00FF00'
                        }}
                    />
                );
                break;
            case 2:
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
                break;
        }

        if (this.state.type) {

        }
        else {

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
                <input type="radio" name="type-polygon" checked={this.state.type === 0} value={this.state.type} onChange={this.onChangeLine}/> <label>Line</label>
                <br/>
                <input type="radio" name="type-polygon" checked={this.state.type === 1} value={!this.state.type} onChange={this.onChangePolygon}/> <label>Polygon</label>
                <br/>
                <input type="radio" name="type-polygon" checked={this.state.type === 2} value={this.state.type} onChange={this.onChangeRectangle}/> <label>Rectangle</label>
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
