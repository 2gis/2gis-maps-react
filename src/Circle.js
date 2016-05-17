import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Circle extends Component {
    static propsTypes = {
        style: PropTypes.object,
        pos: PropTypes.array,
        radius: PropTypes.number
    };
    render() {
        return <noscript></noscript>;
    }
}
