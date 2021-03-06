import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Icon extends MapComponent {
    static propsTypes = {
        iconUrl: PropTypes.string,
        iconSize: PropTypes.array
    };

    componentDidMount() {
        this.setIcon();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.iconUrl != this.props.iconUrl || prevProps.iconSize != this.props.iconSize) {
            this.setIcon();
        }
        this.props.element._bringToFront()
    }

    setIcon() {
        this.props.element.setIcon(DG.icon({
            iconUrl: this.props.iconUrl,
            iconSize: this.props.iconSize
        }));
    }
}
