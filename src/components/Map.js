import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'

import FireLocationMarker from './FireLocationMarker'
import VolcanoLocationMarker from './VolcanoLocationMarker'
import StormLocationMarker from './StormLocationMarker'
import DroughtLocationMarker from './DroughtLocationMarker'
import DustLocationMarker from './DustLocationMarker'
import EarthquakesLocationMarker from './EarthquakesLocationMarker'
import FloodLocationMarker from './FloodLocationMarker'
import LandslidesLocationMarker from './LandslidesLocationMarker'
import ManmadeLocationMarker from './ManmadeLocationMarker'
import SeaAndLakeLocationMarker from './SeaAndLakeLocationMarker'
import SnowLocationMarker from './SnowLocationMarker'
import TemperatureExtremesLocationMarker from './TemperatureExtremesLocationMarker'
import WaterColorLocationMarker from './WaterColorLocationMarker'



const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const droughtMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 6) {
            return <DroughtLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const dustMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 7) {
            return <DustLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const fireMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} date={ev.geometries[0].date} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
        }
        return null
    })

    const floodMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 9) {
            return <FloodLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} date={ev.geometries[0].date} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date })} />
        }
        return null
    })

    const stormMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 10) {
            return <StormLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const volcanoMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 12) {
            return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const waterColorMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 13) {
            return <WaterColorLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const landslidesMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 14) {
            return <LandslidesLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const seaAndLakeMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 15) {
            return <SeaAndLakeLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const earthquakesMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 16) {
            return <EarthquakesLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })

    const snowMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 17) {
            return <SnowLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })
    
    const temperatureExtremesMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 18) {
            return <TemperatureExtremesLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
        }
        return null
    })
    
    const manmadeMarkers = eventData.map(ev => {
        if(ev.categories[0].id === 19) {
            return <ManmadeLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, date: ev.geometries[0].date  })} />
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
                {droughtMarkers}
                {dustMarkers}
                {fireMarkers}
                {floodMarkers}
                {stormMarkers}
                {volcanoMarkers}
                {earthquakesMarkers}
                {landslidesMarkers}
                {manmadeMarkers}
                {seaAndLakeMarkers}
                {snowMarkers}
                {temperatureExtremesMarkers}
                {waterColorMarkers}

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 39.3210,
        lng: -111.0937
    },
    zoom: 6
}
export default Map
