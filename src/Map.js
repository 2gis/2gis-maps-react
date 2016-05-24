import React, { Component, Children, PropTypes, cloneElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps';

export default class Map extends Component {
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
        preferCanvas: true,
        touchZoom: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        dragging: true
    };

    state = {
        Map: null
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
        let Map = DG.map(container, options);

        // Map events.
        if (this.props.onClick) {
            Map.on('click', e => this.props.onClick.call(this, e));
        }

        if (this.props.onProjectChange) {
            Map.on('projectchange', e => this.props.onProjectChange.call(this, e));
        }

        if (this.props.onProjectLeave) {
            Map.on('projectleave', e => this.props.onProjectLeave.call(this, e));
        }

        this.setState({
            Map: Map
        });
    }

    componentDidUpdate() {
        Children.toArray(this.props.children).forEach(child => {
            if (typeof this['render' + child.type.name] == 'function') {
                this['render' + child.type.name](child);
            }
            else {
                const name = child.type.name || child.type;
                console.error('Component \'' + name + '\' not allowed inside Map.');
            }
        });
    }

    componentWillUnmount() {
        this.state.Map.remove();
    }

    renderMarker(child) {
        let dgElement = DG.marker(child.props.pos, {
            draggable: child.props.draggable,
            clickable: child.props.clickable
        }).addTo(this.state.Map);

        if (child.props.label) {
            dgElement.bindLabel(child.props.label);
        }

        if (child.props.staticLabel) {
            dgElement.bindLabel(child.props.staticLabel, { static: true });
        }

        if (child.props.onClick) {
            dgElement.on('click', e => child.props.onClick.call(this, e));
        }

        if (child.props.onClick) {
            dgElement.on('click', e => child.props.onClick.call(this, e));
        }

        if (child.props.onDrag) {
            dgElement.on('drag', e => child.props.onDrag.call(this, e));
        }

        if (Children.count(child.props.children) > 0) {
            Children.toArray(child.props.children).forEach(child => {
                const name = child.type.name || child.type;
                const allowedNames = ['Popup', 'Icon', 'DivIcon'];

                if (typeof allowedNames.indexOf(name) != 'undefined') {
                    this['render' + name](name == 'Popup' ? cloneElement(child, {pos: child.props.pos}) : child, dgElement);
                }
                else {
                    console.error('Component \'' + name + '\' not allowed inside Marker.');
                }
            });
        }
    }

    renderIcon(child, element) {
        let icon = DG.icon({
            iconUrl: child.props.iconUrl,
            iconSize: child.props.iconSize
        });

        element.setIcon(icon);
    }

    renderDivIcon(child, element) {
        const iconHtml = ReactDOMServer.renderToString(
            <div style={{
                padding: 0,
                margin: 0,
                display: 'inline'
            }}>{ child.props.children }</div>
        );

        let icon = DG.divIcon({
            iconSize: child.props.iconSize,
            html: iconHtml
        });

        element.setIcon(icon);
    }

    renderPopup(child, element) {
        const popupHtml = ReactDOMServer.renderToString(
            <div style={{
                padding: 0,
                margin: 0,
                display: 'inline'
            }}>{ child.props.children }</div>
        );

        let dgElement = null;

        if (!element || element._leaflet_id == this.state.Map._leaflet_id) {
            dgElement = DG.popup()
                .setLatLng(child.props.pos)
                .setContent(popupHtml)
                .openOn(this.state.Map);
        } else {
            dgElement = element.bindPopup(popupHtml)._popup;
        }

        if (child.props.onClick) {
            dgElement.on('click', e => child.props.onClick.call(this, e));
        }
    }

    renderRuler(child) {
        DG.ruler(child.props.points).addTo(this.state.Map);
    }

    renderGeoJSON(child) {
        let options = {
            style: child.props.style || null,
            pointToLayer: child.props.pointToLayer || null,
            onEachFeature: child.props.onEachFeature || null,
            filter: child.props.filter || null
        };

        DG.geoJson(child.props.data, options).addTo(this.state.Map);
    }

    renderWkt(child) {
        DG.Wkt.geoJsonLayer(child.props.data, child.props.style || null).addTo(this.state.Map);
    }

    renderCircle(child) {
        let dgElement = DG.circle(child.props.pos, child.props.radius);

        if (child.props.style) {
            dgElement.setStyle(child.props.style);
        }

        if (child.props.label) {
            dgElement.bindLabel(child.props.label)
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let children = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(children, dgElement);
        }

        dgElement.addTo(this.state.Map);
    }

    renderCircleMarker(child) {
        let dgElement = DG.circleMarker(child.props.pos);

        if (child.props.style) {
            dgElement.setStyle(child.props.style);
        }

        if (child.props.label) {
            dgElement.bindLabel(child.props.label)
        }

        if (child.props.radius) {
            dgElement.setRadius(child.props.radius);
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let children = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(children, dgElement);
        }

        dgElement.addTo(this.state.Map);
    }

    renderPolyline(child) {
        let dgElement = DG.polyline(child.props.points, child.props.style || null);

        if (child.props.label) {
            dgElement.bindLabel(child.props.label)
        }

        dgElement.addTo(this.state.Map);
    }

    renderPolygon(child) {
        let dgElement = DG.polygon(child.props.points);

        if (child.props.style) {
            dgElement.setStyle(child.props.style);
        }

        if (child.props.label) {
            dgElement.bindLabel(child.props.label)
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let children = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(children, dgElement);
        }

        dgElement.addTo(this.state.Map);
    }

    renderRectangle(child) {
        let dgElement = DG.rectangle(child.props.pos);

        if (child.props.style) {
            dgElement.setStyle(child.props.style);
        }

        if (child.props.label) {
            dgElement.bindLabel(child.props.label)
        }

        if (child.props.radius) {
            dgElement.setRadius(child.props.radius);
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let children = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(children, dgElement);
        }

        dgElement.addTo(this.state.Map);
    }

    render() {
        return (
            <div ref="container" style={this.props.style}></div>
        );
    }
}
