import React, { PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Rectangle extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        bounds: PropTypes.array,
        label: PropTypes.string
    };

    state = {
        dgElement: null,
        childrenForRender: []
    };

    componentDidMount() {
        let dgElement = DG.rectangle(this.props.bounds);

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
        if (this.checkPropsChange('bounds', prevProps)) {
            this.state.dgElement.setBounds(this.props.bounds);
        }
        this.updateLabel(prevProps);
        this.updateStyle(prevProps);
    }
}
