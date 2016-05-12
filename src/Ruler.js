import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Ruler extends Component {
    static propsTypes = {
        points: PropTypes.array
    };
    render() {
        return <noscript></noscript>;
    }
}
