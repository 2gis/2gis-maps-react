import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Polygon extends Component {
    static propsTypes = {
        style: PropTypes.object,
        points: PropTypes.array
    };
    render() {
        return <noscript></noscript>;
    }
}
