import { Icon } from '@iconify/react'
import seaAndLakeLocationIcon from '@iconify/icons-mdi/cup-ice'

const SeaAndLakeLocationMarker = ({ lat, lng, date, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={seaAndLakeLocationIcon} className="seaAndLake-location-icon" />
            
        </div>
    )
}

export default SeaAndLakeLocationMarker