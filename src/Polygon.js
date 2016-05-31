import React, { PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Polygon extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        points: PropTypes.array,
        label: PropTypes.string
    };

    state = {
        dgElement: null,
        childrenForRender: []
    };

    componentDidMount() {
        let dgElement = DG.polygon(this.props.points);

        if (this.props.style) {
            dgElement.setStyle(this.props.style);
        }

        if (this.props.label) {
            dgElement.bindLabel(this.props.label)
        }

        this.setState({
            dgElement: dgElement
        });

        this.props.element.addLayer(dgElement);
    }

    componentDidUpdate(prevProps) {
        let { dgElement } = this.state.dgElement;

        if (this.checkPropsChange('points', prevProps)) {

        }

        if (this.checkPropsChange('style', prevProps)) {
            dgElement.setStyle(this.props.style);
        }

        if (this.checkPropsChange('label', prevProps)) {
            dgElement.bindLabel(this.props.label)
        }
    }
}
