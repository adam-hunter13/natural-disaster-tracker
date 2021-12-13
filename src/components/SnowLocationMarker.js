import { Icon } from '@iconify/react'
import snowLocationIcon from '@iconify/icons-mdi/snowflake'

const SnowLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={snowLocationIcon} className="snow-location-icon" />
            
        </div>
    )
}

export default SnowLocationMarker