import React, { Component, PropTypes } from 'react'

export default class Polygon extends Component {
    static propsTypes = {
        style: PropTypes.object,
        points: PropTypes.array,
        label: PropTypes.string
    };
    render() {
        return <noscript></noscript>;
    }
}
