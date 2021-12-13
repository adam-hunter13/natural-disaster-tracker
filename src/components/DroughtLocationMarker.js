import { Icon } from '@iconify/react'
import droughtLocationIcon from '@iconify/icons-mdi/water-drop'

const DroughtLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={droughtLocationIcon} className="drought-location-icon" />
            
        </div>
    )
}

export default DroughtLocationMarker