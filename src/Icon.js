import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Icon extends MapComponent {
    static propsTypes = {
        iconUrl: PropTypes.string,
        iconSize: PropTypes.array
    };

    componentDidMount() {
        let icon = DG.icon({
            iconUrl: this.props.iconUrl,
            iconSize: this.props.iconSize
        });

        this.props.element.setIcon(icon);
    }
}
