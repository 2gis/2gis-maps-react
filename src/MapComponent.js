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

    updateLabel(prevProps) {
        let { dgElement } = this.state;

        if (this.checkPropsChange('label', prevProps)) {
            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }
            else {
                dgElement.unbindLabel();
            }
        }
    }

    updatePos(prevProps) {
        let { dgElement } = this.state;

        if (this.checkPropsChange('pos', prevProps)) {
            dgElement.setLatLng(this.props.pos);
        }
    }

    updateStyle(prevProps) {
        let { dgElement } = this.state;

        if (this.checkPropsChange('style', prevProps)) {
            dgElement.setStyle(this.props.style);
        }
    }

    insideMap() {
        return !!this.props.element.options.zoom
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
