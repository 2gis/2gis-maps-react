import React, { Component, Children, cloneElement } from 'react'

export default class MapComponent extends Component {
    render() {
        let childrenForRender = [];

        if (this.state && this.state.dgElement && this.props.children ) {
            childrenForRender = Children.map(this.props.children,
                child => cloneElement(child, {
                    element: this.state.dgElement
                })
            );
        }

        return (
            <noscript>
                { childrenForRender }
            </noscript>
        );
    }
}
