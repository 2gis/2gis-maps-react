import React, { Component } from 'react'
import { render } from 'react-dom'

export default class Marker extends Component {
    render() {
        return <noscript></noscript>;
    }
    componentDidMount() {
        setTimeout(()=>{
            if (this.props.elementParent) {
                this.dgElement = DG.marker(this.props.pos)
                    .addTo(this.props.elementParent.dgElement);

                if (this.props.children) {
                    let popup = this.dgElement.bindPopup(' ');
                    popup.reactChildren = this.props.children;

                    this.dgElement.on('click', (e)=>{
                        let domElement = e.target._popup._container.getElementsByClassName('dg-popup__container-wrapper')[0];

                        const renderElement = (
                            <div className="dg-popup__container">
                                {this.props.children}
                            </div>
                        );

                        render(renderElement, domElement);

                        e.target._popup._updateLayout();
                        e.target._popup._updatePosition();
                    });
                }
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
