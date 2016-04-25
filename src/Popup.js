import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Popup extends Component {
    render() {
        return <noscript></noscript>;
    }
    componentDidMount() {
        setTimeout(()=>{
            if (this.props.elementParent) {
                let dgElement = DG.popup()
                    .setLatLng(this.props.pos)
                    .setContent(' ')
                    .openOn(this.props.elementParent.dgElement);

                let domElement = dgElement._container.getElementsByClassName('dg-popup__container-wrapper')[0];

                const renderElement = (
                    <div className="dg-popup__container">
                        {this.props.children}
                    </div>
                );

                render(renderElement, domElement);

                dgElement._updateLayout();
                dgElement._updatePosition();
            }
        }, 0);
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        if (this.dgElement) {
            this.dgElement.remove();
        }
    }
}
