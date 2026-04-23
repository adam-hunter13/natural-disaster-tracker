const LocationInfoBox = ({ info, onClose }) => {
    return (
        <div className="location-info">
            <div className="location-header">
                <h2>Event Location Info</h2>
                <div onClick={onClose} style={{ cursor: 'pointer' }}>X</div>
            </div>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>Date: <strong>{ info.date }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox