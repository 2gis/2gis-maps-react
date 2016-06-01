import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Polyline extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        points: PropTypes.array,
        label: PropTypes.string
    };

    state = {
        dgElement: null
    };

    static defaultProps = {
        style: null
    };

    componentDidUpdate(prevProps) {
        this.updatePoints(prevProps);
        this.updateLabel(prevProps);
        this.updateStyle(prevProps);
    }

    componentDidMount() {
        let dgElement = DG.polyline(this.props.points, this.props.style);

        if (this.props.label) {
            dgElement.bindLabel(this.props.label)
        }

        this.setState({
            dgElement: dgElement
        });

        this.props.element.addLayer(dgElement);
    }
}
