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
        childrenForRender: [],
        pos: DG.latLng(this.props.pos) || null
    };

    dragging(e) {
        this.setState({
            dgElement: this.state.dgElement,
            childrenForRender: this.state.childrenForRender,
            pos: e.latlng
        });
    }

    draggingSwitchTo(isEnable) {
        const { dgElement } = this.state;
        const self = this;

        if (isEnable) {
            dgElement.on('drag', e => self.dragging.call(self, e));
            dgElement.dragging.enable();
        }
        else {
            dgElement.off('drag', e => self.dragging.call(self, e));
            dgElement.dragging.disable();
            dgElement.setLatLng(this.state.pos);
        }
    }

    componentDidMount() {
        let dgElement = DG.marker(this.props.pos, {
            draggable: this.props.draggable,
            clickable: this.props.clickable
        });

        // For dragging Marker.
        if (this.props.draggable) {
            this.draggingSwitchTo(true);
        }

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

        // todo: fix it after fix https://github.com/2gis/mapsapi/issues/332

        if (this.props.staticLabel) {
            this.props.element.addLayer(dgElement);

            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        }
        else {
            this.props.element.addLayer(dgElement);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { dgElement } = this.state;

        // Update pos.
        if (prevProps.pos != this.props.pos) {
            dgElement.setLatLng(DG.latLng(this.state.pos));
        }

        // Update label.
        if (prevProps.label != this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        // Update static label.
        if (prevProps.staticLabel != this.props.staticLabel) {
            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        }

        // Update draggable.
        if (prevProps.draggable != this.props.draggable) {
            this.draggingSwitchTo(this.props.draggable);
        }
    }
}
