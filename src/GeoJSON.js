import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class GeoJSON extends Component {
    static propsTypes = {
        data: PropTypes.object,
        onEachFeature: PropTypes.func
    };
    render() {
        return <noscript></noscript>;
    }
}
