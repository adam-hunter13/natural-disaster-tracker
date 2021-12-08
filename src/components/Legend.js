import React from 'react'
import { Icon } from '@iconify/react'
import fireLocationIcon from '@iconify/icons-mdi/fire-alert'
import weatherLocationIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoeLocationIcon from '@iconify/icons-mdi/fire-alert'


const Legend = () => {
    return (
        <div className="legend">
        <h2>Legend</h2>
        <ul>
            <li><strong>Wildfires: </strong><Icon icon={fireLocationIcon} className="fire-location-icon" /></li>
            <li><strong>Severe Weather: </strong><Icon icon={weatherLocationIcon} className="severe-weather-location-icon" /></li>
            <li><strong>Volcanoe: </strong><Icon icon={volcanoeLocationIcon} className="volcanoe-location-icon" /></li>
        </ul>
        
    </div>
    )
}

export default Legend
