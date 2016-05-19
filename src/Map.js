import React, { Component, Children, PropTypes, cloneElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps';

export default class Map extends Component {
    static propsTypes = {
        style: PropTypes.object,
        center: PropTypes.array,
        zoom: PropTypes.number,
        geoClicker: PropTypes.bool,
        projectDetector: PropTypes.bool,
        zoomControl: PropTypes.bool,
        fullscreenControl: PropTypes.bool
    };

    state = {
        Map: null
    };

    componentDidMount() {
        const { container } = this.refs;

        let options = {
            zoom: this.props.zoom,
            center: this.props.center,
            geoclicker: this.props.geoClicker || false,
            projectDetector: this.props.projectDetector || false,
            zoomControl: this.props.zoomControl || true,
            fullscreenControl: this.props.fullscreenControl || true,
            preferCanvas: this.props.preferCanvas || false
        };

        let Map = DG.map(container, options);

        if (this.props.onClick) {
            Map.on('click', e => this.props.onClick.call(this, e));
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
                console.error('Component ' + name + ' not allowed inside Map.');
            }
        });
    }

    componentWillUnmount() {
        this.state.Map.remove();
    }

    renderMarker(child) {
        let dgElement = DG.marker(child.props.pos).addTo(this.state.Map);

        if (child.props.label) {
            dgElement.bindLabel(child.props.label);
        }

        if (child.props.staticLabel) {
            dgElement.bindLabel(child.props.staticLabel, { static: true });
        }

        if (child.props.onClick) {
            dgElement.on('click', e => child.props.onClick.call(this, e));
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let popupChild = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(popupChild, dgElement);
        }
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
