import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class GeoJSON extends MapComponent {
    static propsTypes = {
        data: PropTypes.object,
        onEachFeature: PropTypes.func
    };

    static defaultProps = {
        style: null,
        pointToLayer: null,
        onEachFeature: null,
        filter: null
    };

    componentDidMount() {
        let options = {
            style: this.props.style,
            pointToLayer: this.props.pointToLayer,
            onEachFeature: this.props.onEachFeature,
            filter: this.props.filter
        };

        let dgElement = DG.geoJson(this.props.data, options);
        this.props.element.addLayer(dgElement);
    }
}
