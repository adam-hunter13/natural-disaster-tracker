import { Icon } from '@iconify/react'
import temperatureExtremesLocationIcon from '@iconify/icons-mdi/warning-circle'

const TemperatureExtremesLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={temperatureExtremesLocationIcon} className="snow-location-icon" />
            
        </div>
    )
}

export default TemperatureExtremesLocationMarker