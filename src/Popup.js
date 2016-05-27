import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Popup extends MapComponent {
    static propsTypes = {
        pos: PropTypes.array,
        onClick: PropTypes.func
    };

    componentDidMount() {
        const popupHtml = ReactDOMServer.renderToString(
            <div style={{
                padding: 0,
                margin: 0,
                display: 'inline'
            }}>{ this.props.children }</div>
        );

        let element = this.props.element;

        let dgElement = null;

        if (element.options.zoom) {
            dgElement = DG.popup()
                .setLatLng(this.props.pos)
                .setContent(popupHtml)
                .openOn(element);
        } else {
            dgElement = element.bindPopup(popupHtml)._popup;
        }

        if (this.props.onClick) {
            dgElement.on('click', e => this.props.onClick.call(this, e));
        }
    }
}
