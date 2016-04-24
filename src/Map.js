import React, { Component, Children, cloneElement } from 'react'
import { findDOMNode, render } from 'react-dom'

export default class Map extends Component {
    render() {
        this.children = Children.map(this.props.children, (element, idx) => {
            return cloneElement(element, { ref: idx , elementParent: this});
        });

        let divStyle = {
            width: this.props.size.width,
            height: this.props.size.height
        };

        return (
            <div style={divStyle}>
                {this.children}
            </div>
        );
    }
    componentDidMount() {
        this.dgElement = DG.map(findDOMNode(this), {
            center: this.props.center,
            zoom: this.props.zoom
        });
    }
    componentWillUnmount() {
        super.componentWillUnmount();
        this.dgElement.remove();
    }
}
