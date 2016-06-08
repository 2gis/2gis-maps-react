import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import { Map, Marker } from 'src/'

describe('Map component with Marker inside', () => {
    let node;

    const map = (
        <Map
            center={[0, 0]}
            zoom={12}
        >
            <Marker
                pos={[0, 0]}
                staticLabel={'I\'m marker on map.'}
            />
        </Map>
    );

    beforeEach(() => {
        node = document.createElement('div')
    });

    afterEach(() => {
        unmountComponentAtNode(node)
    });

    it('displays a static label', () => {
        render(map, node, () => {
            expect(node.innerHTML).toContain('I\'m marker on map.')
        });
    })
});
