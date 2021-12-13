import { Icon } from '@iconify/react'
import dustLocationIcon from '@iconify/icons-mdi/dirty'

const DustLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={dustLocationIcon} className="dust-location-icon" />
            
        </div>
    )
}

export default DustLocationMarker