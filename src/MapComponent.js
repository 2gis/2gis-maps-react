import React, { Component, Children, cloneElement } from 'react'

export default class MapComponent extends Component {
    componentWillUnmount() {
        if (this.state && this.state.dgElement) {
            this.state.dgElement.remove();
        }
    }

    checkPropsChange(propsName, prevProps) {
        if (typeof propsName == 'string') {
            return prevProps[propsName] !== this.props[propsName];
        }
        else if (typeof propsName == 'object') {
            return propsName.some(name => {
                return prevProps[name] !== this.props[name]
            });
        }
    }

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
