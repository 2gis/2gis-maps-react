import React, { PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class CircleMarker extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        pos: PropTypes.array,
        radius: PropTypes.number,
        label: PropTypes.string
    };

    state = {
        dgElement: null,
        childrenForRender: []
    };

    componentDidUpdate(prevProps) {
        let { dgElement } = this.state;

        if (this.checkPropsChange('pos', prevProps)) {
            dgElement.setLatLng(this.props.pos);
        }
        if (this.checkPropsChange('radius', prevProps)) {
            dgElement.setRadius(this.props.radius);
        }
        if (this.checkPropsChange('style', prevProps)) {
            dgElement.setStyle(this.props.style);
        }
    }

    componentDidMount() {
        let dgElement = DG.circleMarker(this.props.pos);

        if (this.props.style) {
            dgElement.setStyle(this.props.style);
        }

        if (this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        if (this.props.radius) {
            dgElement.setRadius(this.props.radius);
        }

        this.setState({
            dgElement: dgElement
        });

        this.props.element.addLayer(dgElement);
    }
}
