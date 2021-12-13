import { Icon } from '@iconify/react'
import waterColorLocationIcon from '@iconify/icons-mdi/water-flow'

const WaterColorLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={waterColorLocationIcon} className="waterColor-location-icon" />
            
        </div>
    )
}

export default WaterColorLocationMarker