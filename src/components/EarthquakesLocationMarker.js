import { Icon } from '@iconify/react'
import earthquakeLocationIcon from '@iconify/icons-mdi/lightning-bolt'

const EarthquakesLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={earthquakeLocationIcon} className="earthquake-location-icon" />
            
        </div>
    )
}

export default EarthquakesLocationMarker