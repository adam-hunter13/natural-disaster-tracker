import { Icon } from '@iconify/react'
import manmadeLocationIcon from '@iconify/icons-mdi/construction'

const ManmadeLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={manmadeLocationIcon} className="madnmade-location-icon" />
            
        </div>
    )
}

export default ManmadeLocationMarker