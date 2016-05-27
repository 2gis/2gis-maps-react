import React, { PropTypes } from 'react'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Marker extends MapComponent {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func,
        onDrag: PropTypes.func,
        label: PropTypes.string,
        staticLabel: PropTypes.string,
        draggable: PropTypes.bool,
        clickable: PropTypes.bool
    };

    static defaultProps = {
        draggable: false,
        clickable: true,
        label: false,
        staticLabel: false
    };

    state = {
        dgElement: null,
        childrenForRender: []
    };

    componentDidMount() {
        let dgElement = DG.marker(this.props.pos, {
            draggable: this.props.draggable,
            clickable: this.props.clickable
        });

        if (this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        if (this.props.onClick) {
            dgElement.on('click', e => this.props.onClick.call(this, e));
        }

        if (this.props.onDrag) {
            dgElement.on('drag', e => this.props.onDrag.call(this, e));
        }

        this.setState({
            dgElement: dgElement
        });

        // todo: fit it after close https://github.com/2gis/mapsapi/issues/332
        if (this.props.staticLabel) {
            this.props.element.addLayer(dgElement);

            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        }
        else {
            this.props.element.addLayer(dgElement);
        }
    }

    componentDidUpdate() {

    }
}
