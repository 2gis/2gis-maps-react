import React, { Component, Children, cloneElement } from 'react'

export default class MapComponent extends Component {
    componentWillUnmount() {
        if (this.state && this.state.dgElement) {
            this.state.dgElement.remove();
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
        if (this.checkPropsChange('label', prevProps)) {
            if (this.props.label) {
                this.state.dgElement.bindLabel(this.props.label);
            }
            else {
                this.state.dgElement.unbindLabel();
            }
        }
    }

    updatePos(prevProps) {
        if (this.checkPropsChange('pos', prevProps)) {
            this.state.dgElement.setLatLng(this.props.pos);
        }
    }

    updatePoints(prevProps) {
        if (this.checkPropsChange('points', prevProps)) {
            this.state.dgElement.setLatLngs(this.props.points);
        }
    }

    updateStyle(prevProps) {
        if (this.checkPropsChange('style', prevProps)) {
            this.state.dgElement.setStyle(this.props.style);
        }
    }

    insideMap() {
        return !!this.props.element.options.zoom
    }

    bindEvents(dgElement) {
        for (let prop in this.props) {
            if (prop.slice(0, 2) === 'on' && typeof this.props[prop] === 'function') {
                dgElement.on(prop.slice(2).toLowerCase(), this.props[prop]);
            }
        }
    }

    updateEvents(dgElement, prevProps) {
        for (let prop in this.props) {
            if (prop.slice(0, 2) === 'on' && typeof this.props[prop] === 'function') {
                if (typeof prevProps[prop] == 'undefined') {
                    dgElement.on(prop.slice(2).toLowerCase(), this.props[prop]);
                }
                if (this.props[prop] !== prevProps[prop]) {
                    dgElement.off(prop.slice(2).toLowerCase(), prevProps[prop]);
                    dgElement.on(prop.slice(2).toLowerCase(), this.props[prop]);
                }
            }
        }
    }
}
