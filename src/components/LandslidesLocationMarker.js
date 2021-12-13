import { Icon } from '@iconify/react'
import landslidesLocationIcon from '@iconify/icons-mdi/mountain'

const LandslidesLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={landslidesLocationIcon} className="landslides-location-icon" />
            
        </div>
    )
}

export default LandslidesLocationMarker