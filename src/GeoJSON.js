import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class GeoJSON extends MapComponent {
    static propsTypes = {
        data: PropTypes.object,
        style: PropTypes.object,
        pointToLayer: PropTypes.func,
        onEachFeature: PropTypes.func,
        filter: PropTypes.func
    };

    static defaultProps = {
        style: null,
        pointToLayer: null,
        onEachFeature: null,
        filter: null
    };

    state = {
        dgElement: null
    };

    componentDidMount() {
        this.renderGeoJSON();
    }

    componentDidUpdate(prevProps) {
        if (this.checkPropsChange(['data', 'style', 'pointToLayer', 'onEachFeature', 'onEachFeature'], prevProps)) {
            this.renderGeoJSON();
        }
    }

    renderGeoJSON() {
        let options = {
            style: this.props.style,
            pointToLayer: this.props.pointToLayer,
            onEachFeature: this.props.onEachFeature,
            filter: this.props.filter
        };

        if (this.state.dgElement) {
            this.state.dgElement.remove();
        }

        let dgElement = DG.geoJson(this.props.data, options);
        this.props.element.addLayer(dgElement);

        this.setState({
            dgElement: dgElement
        });
    }
}
