import { Icon } from '@iconify/react'
import floodLocationIcon from '@iconify/icons-mdi/flood'

const FloodLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={floodLocationIcon} className="flood-location-icon" />
            
        </div>
    )
}

export default FloodLocationMarker