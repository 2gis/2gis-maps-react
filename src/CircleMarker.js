import React, { Component, PropTypes } from 'react'

export default class CircleMarker extends Component {
    static propsTypes = {
        style: PropTypes.object,
        pos: PropTypes.array,
        radius: PropTypes.number,
        label: PropTypes.object
    };
    render() {
        return <noscript></noscript>;
    }
}
