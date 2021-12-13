import { Icon } from '@iconify/react'
import VolcanoLocationIcon from '@iconify/icons-mdi/peak'

const VolcanoLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={VolcanoLocationIcon} className="volcano-location-icon" />
            
        </div>
    )
}

export default VolcanoLocationMarker