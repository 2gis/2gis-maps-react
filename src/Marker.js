import React, { Component, Children } from 'react'
import { render, findDOMNode } from 'react-dom'
import Popup from './Popup'

export default class Marker extends Component {
    render() {
        return <noscript></noscript>;
    }
    componentDidMount() {
        setTimeout(()=>{
            if (this.props.elementParent) {
                this.dgElement = DG.marker(this.props.pos)
                    .addTo(this.props.elementParent.dgElement);

                if (Children.count(this.props.children) == 1 && this.props.children.type.name == 'Popup') {
                    let pos = this.props.pos;
                    let popupChildren = this.props.children.props.children;
                    let domElement = findDOMNode(this);
                    let dgElement = this.dgElement;
                    let elementParent = this;

                    this.dgElement.on('click', (e) => {
                        let renderElement = (
                            <Popup pos={pos} fromMarker={true} elementParent={elementParent}>
                                {popupChildren}
                            </Popup>
                        );

                        render(renderElement, domElement); // Render Popup

                        dgElement._icon.style.display = 'none'; // Hide Marker when open Popup
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
