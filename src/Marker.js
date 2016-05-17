import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Marker extends Component {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func,
        label: PropTypes.object
    };
    render() {
        return <noscript></noscript>;
    }
}
