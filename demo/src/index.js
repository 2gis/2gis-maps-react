import React, { Component, Children, cloneElement } from 'react'
import { render } from 'react-dom'

import {Map, Marker, Popup} from '../../src'

const map = (
    <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
        <Marker pos={[54.98, 82.89]}>
            <h2>Vestibulum eu odio.</h2>
            <p>Morbi mattis ullamcorper velit.</p>
        </Marker>
        <Popup pos={[54.96, 82.9]}>
            <h2>Vestibulum eu odio.</h2>
            <p>Morbi mattis ullamcorper velit.</p>
        </Popup>
    </Map>
);

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
        const domElenet = document.querySelector('#demo');
        render(map, domElenet);
    });
});
