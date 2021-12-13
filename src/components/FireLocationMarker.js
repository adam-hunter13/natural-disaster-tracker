import { Icon } from '@iconify/react'
import fireLocationIcon from '@iconify/icons-mdi/fire-alert'

const FireLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={fireLocationIcon} className="fire-location-icon" />
            
        </div>
    )
}

export default FireLocationMarker
