import React, { Component, PropTypes } from 'react'

export default class GeoJSON extends Component {
    static propsTypes = {
        data: PropTypes.object,
        onEachFeature: PropTypes.func
    };
    render() {
        return <noscript></noscript>;
    }
}
