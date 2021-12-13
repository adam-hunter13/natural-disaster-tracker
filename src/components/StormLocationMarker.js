import { Icon } from '@iconify/react'
import weatherLocationIcon from '@iconify/icons-mdi/weather-hurricane'

const StormLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={weatherLocationIcon} className="severe-weather-location-icon" />
            
        </div>
    )
}

export default StormLocationMarker