import React, { Component } from 'react'
import { render, findDOMNode } from 'react-dom'

export default class Popup extends Component {
    render() {
        return <noscript></noscript>;
    }
    componentDidMount() {
        setTimeout(()=>{
            if (this.props.elementParent) {
                let mapElement = this.props.fromMarker ?
                    this.props.elementParent.props.elementParent.dgElement : this.props.elementParent.dgElement;

                let dgElement = DG.popup()
                    .setLatLng(this.props.pos)
                    .setContent(' ')
                    .openOn(mapElement);

                let domElement = dgElement._container.getElementsByClassName('dg-popup__container-wrapper')[0];

                const renderElement = (
                    <div className="dg-popup__container">
                        {this.props.children}
                    </div>
                );

                render(renderElement, domElement);

                dgElement._updateLayout();
                dgElement._updatePosition();

                if (this.props.fromMarker) {
                    let domElementForMarker = this.props.elementParent.dgElement._icon;
                    let map = this.props.elementParent.props.elementParent.dgElement;

                    map.on('popupclose', (e) => {
                        if (e.popup._leaflet_id == dgElement._leaflet_id) {
                            domElementForMarker.style.display = 'block';
                        }
                    });
                }
            }
        }, 0);
    }
    componentWillUnmount() {
        if (this.dgElement) {
            this.dgElement.remove();
        }
    }
}
