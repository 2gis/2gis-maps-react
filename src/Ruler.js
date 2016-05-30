import React, { Component, PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Ruler extends MapComponent {
    static propsTypes = {
        points: PropTypes.array
    };

    state = {
        dgElement: {}
    };

    renderRuler() {
        let dgElement = DG.ruler(this.props.points);
        this.props.element.addLayer(dgElement);
        this.setState({
            dgElement: dgElement
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.points != this.props.points) {
            this.state.dgElement.remove();
            this.renderRuler();
        }
    }

    componentDidMount() {
        this.renderRuler();
    }
}
