import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Popup extends Component {
    static propsTypes = {
        pos: PropTypes.array
    };
    render() {
        return <noscript></noscript>; // invariant
    }
}
