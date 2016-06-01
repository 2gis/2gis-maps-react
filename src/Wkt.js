import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Wkt extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        data: PropTypes.string
    };

    static defaultProps = {
        style: null
    };

    state = {
        dgElement: null
    };

    componentDidMount() {
        this.renderWkt();
    }

    componentDidUpdate(prevProps) {
        if (this.checkPropsChange(['data', 'style'], prevProps)) {
            this.renderWkt();
        }
    }

    renderWkt() {
        let dgElement = DG.Wkt.geoJsonLayer(this.props.data, this.props.style);

        if (this.state.dgElement) {
            this.state.dgElement.remove();
        }

        this.props.element.addLayer(dgElement);

        this.setState({
            dgElement: dgElement
        });

    }
}
