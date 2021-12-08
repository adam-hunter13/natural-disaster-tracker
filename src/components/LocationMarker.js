import { Icon } from '@iconify/react'
import fireLocationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireLocationIcon} className="fire-location-icon" />
            
        </div>
    )
}

export default LocationMarker
