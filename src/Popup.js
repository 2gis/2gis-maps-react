import React, { Component, PropTypes } from 'react'

export default class Popup extends Component {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func
    };
    render() {
        return <noscript></noscript>; // invariant
    }
}
