## Getting started
###### We recommend using ES7

Create simple map.
```
import React from 'react'
import { render } from 'react-dom'
import { Map } from '2gismaps-react'

const renderElement = <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13} />

render(renderElement, document.getElementById('demo'));
```

Create simple Marker and Marker with label.
```
import React from 'react'
import { render } from 'react-dom'
import { Map, Marker } from '2gismaps-react'

const renderElement = (
    <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
        <Marker pos={[54.95, 82.82]} />
        
        <Marker pos={[54.93, 82.89]} label={ text: 'I'm label' }>
        
        <Marker pos={[54.98, 82.89]} label={ text: 'I'm label', static: true }>
    </Map>
);

render(renderElement, document.getElementById('demo'));
```

Create simple Popup and Popup inside Marker
```
import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup } from '2gismaps-react'

const renderElement = (
    <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
        <Popup pos={[54.96, 82.9]}>
            <h2>Vestibulum eu odio.</h2>
            <p>Morbi mattis ullamcorper velit.</p>
        </Popup>
        
        <Marker pos={[54.98, 82.89]}>
            <Popup>
                <h2>Vestibulum eu odio.</h2>
                <p>Morbi mattis ullamcorper velit.</p>
            </Popup>
        </Marker>
    </Map>
);

render(renderElement, document.getElementById('demo'));
```

Create Ruler on map.
```
import React from 'react'
import { render } from 'react-dom'
import { Map, Ruler } from '2gismaps-react'

const renderElement = (
    <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
        <Ruler points={[
                       [51.7314, 36.1938],
                       [51.7307, 36.1894],
                       [51.7297, 36.1926],
                       [51.7299, 36.1968],
                       [51.7307, 36.1968]]}
                       />
    </Map>
);

render(renderElement, document.getElementById('demo'));
```

Create different geometries: Circle, Polygon and Path.
```
import React from 'react'
import { render } from 'react-dom'
import { Map, Ruler } from '2gismaps-react'

const renderElement = (
    <Map size={{width: "500px", height: "500px"}} center={[54.98, 82.89]} zoom={13}>
        <Circle center={[51.7299, 36.1968]} radius={}>
        
        <Polygon points={[
                            [51.7314, 36.1938],
                            [51.7307, 36.1894],
                            [51.7297, 36.1926],
                            [51.7299, 36.1968],
                            [51.7307, 36.1968]]}
                            />
        <Path points={[
                       [51.7314, 36.1938],
                       [51.7307, 36.1894],
                       [51.7297, 36.1926],
                       [51.7299, 36.1968],
                       [51.7307, 36.1968]]}
                       />
    </Map>
);

render(renderElement, document.getElementById('demo'));
```
