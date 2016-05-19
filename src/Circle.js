import React, { Component, PropTypes } from 'react'

export default class Circle extends Component {
    static propsTypes = {
        style: PropTypes.object,
        pos: PropTypes.array,
        radius: PropTypes.number,
        label: PropTypes.string
    };
    render() {
        return <noscript></noscript>;
    }
}
