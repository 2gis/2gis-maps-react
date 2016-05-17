import React, { Component, Children, cloneElement } from 'react'
import { render } from 'react-dom'

import { Map, Marker, Popup, Ruler, GeoJSON, Circle } from '../../src'

class ExampleMap extends Component {
    render() {
        return (
            <Map style={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
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
                    label={{text: 'I\'m marker with static label.', static: true}}
                    onClick={e => console.log(e)}
                />

                <Marker pos={[54.96, 82.91]} label={{text: 'I\'m marker.'}}/>

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
                                    "type": "Feature",
                                    "properties": {
                                        "address": "г. Новосибирск, пл. Карла Маркса, 7"
                                    },
                                    "geometry": {
                                        "type": "Point",
                                        "coordinates": [82.8974, 54.9801]
                                    }
                                }}
                         onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.address)}
                />

                <Circle pos={[54.99, 82.89]} radius={500}>
                    <Popup>
                        <h2>Circle popup.</h2>
                        <p>Some text.</p>
                    </Popup>
                </Circle>
            </Map>
        );
    }
}

const getScript = (src, callback) => {
    let s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = () => {
        if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
            callback.done = true;
            callback();
        }
    };
    document.querySelector('head').appendChild(s);
};

const dgUrl = 'http://maps.api.2gis.ru/2.0/loader.js?pkg=full';

getScript(dgUrl, () => {
    DG.then(() => {
        const domElement = document.querySelector('#demo');
        render(<ExampleMap/>, domElement);
    });
});
