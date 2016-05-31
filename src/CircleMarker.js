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

        this.updatePos(prevProps);

        if (this.checkPropsChange('radius', prevProps)) {
            dgElement.setRadius(this.props.radius);
        }

        this.updateLabel(prevProps);

        this.updateStyle(prevProps);
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
