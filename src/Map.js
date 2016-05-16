import React, { Component, Children, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import { render } from 'react-dom';

export default class Map extends Component {
    static propsTypes = {
        size: PropTypes.object,
        center: PropTypes.array,
        zoom: PropTypes.number,
        onClick: PropTypes.func
    };

    state = {
        Map: null
    };

    componentDidMount() {
        const { container } = this.refs;
        const Map = DG.map(container, {
            center: this.props.center,
            zoom: this.props.zoom
        });
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

        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
            dgElementMarker.on('click', e => {
                dgElementMarker.setOpacity(0);

                let dgElementPopup = this.renderPopup(child, child.props.children.props.children);

                this.state.Map.on('popupclose', e => {
                    if (e.popup._leaflet_id == dgElementPopup._leaflet_id) {
                        dgElementMarker.setOpacity(1);
                    }
                });
            });
        }
    }

    renderPopup(child, children) {
        const popupHtml = ReactDOMServer.renderToString(
            <div style={{
                padding: 0,
                margin: 0,
                display: 'inline'
            }}>{ children }</div>
        );

        let dgElement = DG.popup()
            .setLatLng(child.props.pos)
            .setContent(popupHtml)
            .openOn(this.state.Map);

        if (child.props.onClick) {
            dgElement.on('click', child.props.onClick);
        }

        return dgElement;
    }

    renderRuler(child) {
        DG.ruler(child.props.points).addTo(this.state.Map);
    }

    renderMap() {
        if (this.state.Map) {
            Children.toArray(this.props.children).forEach(child => {
                switch (child.type.name) {
                    case 'Marker':
                        this.renderMarker(child);
                        break;

                    case 'Popup':
                        this.renderPopup(child, child.props.children);
                        break;

                    case 'Ruler':
                        this.renderRuler(child);
                        break;
                }
            });
        }
    }

    render() {
        const divStyle = {
            width: this.props.size.width,
            height: this.props.size.height
        };

        return (
            <div>
                <div ref="container" style={divStyle}></div>
            </div>
        );
    }
}
