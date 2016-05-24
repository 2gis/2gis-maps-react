import React, { Component, PropTypes } from 'react'

export default class Icon extends Component {
    static propsTypes = {
        iconUrl: PropTypes.string,
        iconSize: PropTypes.array
    };
    render() {
        return <noscript></noscript>;
    }
}
