import React, { Component, Children, cloneElement, PropTypes } from 'react'
import { findDOMNode, render } from 'react-dom'
import renderPopup from './Popup'

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Map: null
        };
    }
    static propsTypes = {
        size: PropTypes.object,
        center: PropTypes.array,
        zoom: PropTypes.number
    };
    renderPopup(pos, map, children) {
        let dgElement = DG.popup()
            .setLatLng(pos)
            .setContent(' ')
            .openOn(map);

        let container = dgElement._container;

        let domElement = container.getElementsByClassName('dg-popup__container-wrapper')[0];

        const renderElement = (
            <div className="dg-popup__container">
                {children}
            </div>
        );

        render(renderElement, domElement);

        dgElement._updateLayout();
        dgElement._updatePosition();

        return dgElement;
    }
    reRender() {
        if (Children.count(this.props.children) > 0 && this.state.Map) {
            Children.toArray(this.props.children).forEach(child => {
                switch (child.type.name) {
                    case 'Marker':
                        let dgElementMarker = DG.marker(child.props.pos).addTo(this.state.Map);

                        if (child.props.label) {
                            dgElementMarker.bindLabel(child.props.label.text, { static: child.props.label.static || false })
                        }

                        if (Children.count(child.props.children) == 1 && child.props.children.type.name == 'Popup') {
                            dgElementMarker.on('click', e => {
                                dgElementMarker.setOpacity(0);

                                let dgElementPopup = this.renderPopup(child.props.pos, this.state.Map, child.props.children.props.children);

                                this.state.Map.on('popupclose', e => {
                                    if (e.popup._leaflet_id == dgElementPopup._leaflet_id) {
                                        dgElementMarker.setOpacity(1);
                                    }
                                });
                            });
                        }
                        break;

                    case 'Popup':
                        this.renderPopup(child.props.pos, this.state.Map, child.props.children);
                        break;

                    case 'Ruler':
                        DG.ruler(child.props.points).addTo(this.state.Map);
                        break;
                }
            });
        }
    }
    componentDidMount() {
        const Map = DG.map(findDOMNode(this), {
            center: this.props.center,
            zoom: this.props.zoom
        });

        this.setState({
            Map: Map
        });

        this.reRender();
    }
    componentDidUpdate() {
        this.reRender();
    }
    componentWillUnmount() {
        this.state.Map.remove();
    }
    render() {
        const divStyle = {
            width: this.props.size.width,
            height: this.props.size.height
        };

        return (
            <div style={divStyle}></div>
        );
    }
}
