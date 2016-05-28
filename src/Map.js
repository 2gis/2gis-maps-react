import React, { PropTypes } from 'react';
import DG from '2gis-maps';
import MapComponent from './MapComponent'

export default class Map extends MapComponent {
    static propsTypes = {
        style: PropTypes.object,
        center: PropTypes.array,
        zoom: PropTypes.number,
        geoclicker: PropTypes.bool,
        projectDetector: PropTypes.bool,
        zoomControl: PropTypes.bool,
        fullscreenControl: PropTypes.bool,
        preferCanvas: PropTypes.bool,
        touchZoom: PropTypes.bool,
        scrollWheelZoom: PropTypes.bool,
        doubleClickZoom: PropTypes.bool,
        dragging: PropTypes.bool,
        onClick: PropTypes.func,
        onProjectChange: PropTypes.func,
        onProjectLeave: PropTypes.func,
        maxBounds: PropTypes.array,
        minZoom: PropTypes.number,
        maxZoom: PropTypes.number
    };

    static defaultProps = {
        zoom: false,
        center: false,
        geoclicker: false,
        projectDetector: false,
        zoomControl: true,
        fullscreenControl: true,
        preferCanvas: false,
        touchZoom: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true
    };

    state = {
        dgElement: null,
        childrenForRender: []
    };

    componentDidMount() {
        const { container } = this.refs;

        // Map options.
        const {
            zoom, center, geoclicker, projectDetector, zoomControl, fullscreenControl, preferCanvas, touchZoom,
            scrollWheelZoom, doubleClickZoom, dragging, maxBounds, minZoom, maxZoom
        } = this.props;

        let options = {
            zoom, center, geoclicker, projectDetector, zoomControl, fullscreenControl, preferCanvas, touchZoom,
            scrollWheelZoom, doubleClickZoom, dragging, maxBounds, minZoom, maxZoom
        };

        // Check exist prop center.
        if (!center) {
            console.error('For initial map You should set prop \'center\'.');
        }

        // Check exist zoom center.
        if (!zoom) {
            console.error('For initial map You should set prop \'zoom\'.');
        }

        // Create Map.
        let dgElement = DG.map(container, options);

        // dgElement events.
        if (this.props.onClick) {
            dgElement.on('click', e => this.props.onClick.call(this, e));
        }

        if (this.props.onProjectChange) {
            dgElement.on('projectchange', e => this.props.onProjectChange.call(this, e));
        }

        if (this.props.onProjectLeave) {
            dgElement.on('projectleave', e => this.props.onProjectLeave.call(this, e));
        }

        this.setState({
            dgElement: dgElement
        });
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div ref="container" style={this.props.style}>
                { super.render() }
            </div>
        );
    }
}
