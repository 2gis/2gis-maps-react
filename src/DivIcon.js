import React, { Component, PropTypes } from 'react'
import ReactDOMServer from 'react-dom/server';
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class DivIcon extends MapComponent {
    static propsTypes = {
        iconSize: PropTypes.array,
        dangerouslySetInnerHTML: PropTypes.string
    };

    static defaultProps = {
        dangerouslySetInnerHTML: ''
    };

    componentDidMount() {
        let iconHtml = '';
        if (this.props.children) {
            iconHtml = ReactDOMServer.renderToString(
                <div style={{
                padding: 0,
                margin: 0,
                display: 'inline'
            }}>{ this.props.children }</div>
            );
        }
        else {
            iconHtml = this.props.dangerouslySetInnerHTML;
        }

        let icon = DG.divIcon({
            iconSize: this.props.iconSize,
            html: iconHtml
        });

        this.props.element.setIcon(icon);
    }
}
