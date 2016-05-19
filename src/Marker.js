import React, { Component, PropTypes } from 'react'

export default class Marker extends Component {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func,
        label: PropTypes.string,
        staticLabel: PropTypes.string
    };
    render() {
        return <noscript></noscript>;
    }
}
