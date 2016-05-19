import React, { Component, Children, cloneElement } from 'react'
import ReactDOM from 'react-dom'

import { Map, Marker, Popup, Ruler, GeoJSON, Wkt, Circle, Polyline, Polygon, CircleMarker, Rectangle } from '../../src'

class ExampleMap extends Component {
    echoLatlng(e) {
        console.log(e.latlng.lat + ', ' + e.latlng.lng);
    }
    render() {
        return (
            <Map
                style={{width: "500px", height: "500px"}}
                center={[54.98, 82.89]}
                zoom={12}
                onClick={this.echoLatlng}
                preferCanvas={true}
            >
                <Marker pos={[54.98, 82.89]}>
                    <Popup>
                        <h2>Vestibulum eu odio.</h2>
                        <p>Morbi mattis ullamcorper velit.</p>
                    </Popup>
                </Marker>

                <Marker pos={[54.98, 82.86]}>
                    <Popup onClick={e => console.log(e)}>
                        <h2>Vestibulum eu odio.</h2>
                    </Popup>
                </Marker>

                <Marker
                    pos={[54.98, 82.9]}
                    staticLabel={'I\'m marker with static label.'}
                    onClick={e => console.log(e)}
                />

                <Marker pos={[54.96, 82.91]} label={'I\'m marker.'}/>

                <Popup pos={[54.96, 82.9]} onClick={e => console.log(e)}>
                    <h2>Vestibulum eu odio.</h2>
                    <p>Morbi mattis ullamcorper velit.</p>
                </Popup>

                <Ruler points={[
                        [54.99, 82.86],
                        [55.00, 82.89],
                        [54.99, 82.91]
                        ]}/>

                <GeoJSON data={{
                            "type": "LineString",
                            "coordinates": [
                                            [82.86540, 55.00006],
                                            [82.89493, 55.00302],
                                            [82.91931, 54.99544]
                                           ]
                                }}
                         style={{
                            "color": "#ff7800",
                            "weight": 5,
                            "opacity": 0.65
                         }}
                />

                <Wkt data='POLYGON((
                                    82.87313 54.97564,
                                    82.87176 54.96194,
                                    82.85253 54.96224,
                                    82.85562 54.97662,
                                    82.87313 54.97564
                                  ))'
                     style={{
                            "color": "#00ff00",
                            "weight": 1
                         }}
                />

                <Circle pos={[54.99, 82.89]} radius={500}>
                    <Popup>
                        <h2>Circle popup.</h2>
                        <p>Some text.</p>
                    </Popup>
                </Circle>

                <Polyline points={[
                                    [54.95829, 82.82386],
                                    [54.94055, 82.89253],
                                    [54.95356, 82.96291]
                                    ]}
                          style={{
                            "color": "#ff0000",
                            "weight": 8,
                            "opacity": 0.45
                         }}
                          label={'I\'m line.'}
                />

                <Polygon points={[
                                    [55.022511774575335, 82.91553497314455],
                                    [55.0114888249396, 82.89253234863283],
                                    [54.98864593043392, 82.95879364013673],
                                    [55.012079416926845, 82.96840667724611]
                                ]}
                         label={'I\'m polygon.'}
                >
                    <Popup>
                        <p>Polygon popup</p>
                    </Popup>
                </Polygon>

                <CircleMarker pos={[54.99, 82.9]} radius={20}/>

                <Rectangle
                    pos={[[54.95731, 82.87261], [54.947, 82.92]]}
                    label={'I\'m rectangle.'}
                >
                    <Popup>
                        <p>Rectangle popup</p>
                    </Popup>
                </Rectangle>

            </Map>
        );
    }
}

const getStyle = (src, callback) => {
    let s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.async = true;
    s.onreadystatechange = s.onload = () => {
        if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
            callback.done = true;
            callback();
        }
    };
    document.querySelector('head').appendChild(s);
};

const dgUrl = 'https://maps.api.2gis.ru/2.0/css?pkg=full&skin=dark';

getStyle(dgUrl, () => {
    const domElement = document.querySelector('#demo');
    ReactDOM.render(<ExampleMap/>, domElement);
});
