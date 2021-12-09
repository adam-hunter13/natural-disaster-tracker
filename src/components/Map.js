import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireLocationMarker from './FireLocationMarker'
import VolcanoLocationMarker from './VolcanoLocationMarker'
import StormLocationMarker from './StormLocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const fireMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    const volcanoMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 12) {
            return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    const stormMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 10) {
            return <StormLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {fireMarkers}
                {volcanoMarkers}
                {stormMarkers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.3210,
        lng: 111.0937
    },
    zoom: 6
}
export default Map
