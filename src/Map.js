import React, { Component, Children, PropTypes, cloneElement } from 'react';
import ReactDOMServer from 'react-dom/server';
import { render } from 'react-dom';

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
            fullscreenControl: this.props.fullscreenControl || true
        };

        const Map = DG.map(container, options);

        this.setState({
            Map: Map
        });
    }

    componentDidUpdate() {
        this.renderMap();
    }

    componentWillUnmount() {
        this.state.Map.remove();
    }

    renderMarker(child) {
        let dgElementMarker = DG.marker(child.props.pos).addTo(this.state.Map);

        if (child.props.label) {
            dgElementMarker.bindLabel(child.props.label.text, { static: child.props.label.static || false })
        }

        if (child.props.onClick) {
            dgElementMarker.on('click', e => child.props.onClick.call(this, e));
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let popupChild = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(popupChild, dgElementMarker);
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

        let dgElementPopup = null;

        if (!element || element._leaflet_id == this.state.Map._leaflet_id) {
            dgElementPopup = DG.popup()
                .setLatLng(child.props.pos)
                .setContent(popupHtml)
                .openOn(this.state.Map);
        } else {
            dgElementPopup = element.bindPopup(popupHtml)._popup;
        }

        if (child.props.onClick) {
            dgElementPopup.on('click', e => child.props.onClick.call(this, e));
        }
    }

    renderRuler(child) {
        DG.ruler(child.props.points).addTo(this.state.Map);
    }

    renderCircle(child) {
        let dgElementCircle = DG.circle(child.props.pos, child.props.radius);

        if (child.props.style) {
            dgElementCircle.setStyle(child.props.style);
        }

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            let popupChild = cloneElement(child.props.children, {pos: child.props.pos});

            this.renderPopup(popupChild, dgElementCircle);
        }

        dgElementCircle.addTo(this.state.Map);
    }

    renderMap() {
        if (this.state.Map) {
            Children.toArray(this.props.children).forEach(child => {
                switch (child.type.name) {
                    case 'Marker':
                        this.renderMarker(child);
                        break;

                    case 'Popup':
                        this.renderPopup(child, this.state.Map);
                        break;

                    case 'Ruler':
                        this.renderRuler(child);
                        break;

                    case 'Circle':
                        this.renderCircle(child);
                        break;
                }
            });
        }
    }

    render() {
        return (
            <div ref="container" style={this.props.style}></div>
        );
    }
}
