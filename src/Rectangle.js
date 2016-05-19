import React, { Component, PropTypes } from 'react'

export default class Rectangle extends Component {
    static propsTypes = {
        style: PropTypes.object,
        pos: PropTypes.array,
        label: PropTypes.string
    };
    render() {
        return <noscript></noscript>;
    }
}
