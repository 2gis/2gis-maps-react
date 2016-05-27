import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Wkt extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        data: PropTypes.object
    };

    static defaultProps = {
        style: null
    };

    componentDidMount() {
        let dgElement = DG.Wkt.geoJsonLayer(this.props.data, this.props.style);
        this.props.element.addLayer(dgElement);
    }
}
