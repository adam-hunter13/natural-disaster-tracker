import React from 'react'
import { Icon } from '@iconify/react'
import fireLocationIcon from '@iconify/icons-mdi/fire-alert'
import weatherLocationIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoLocationIcon from '@iconify/icons-mdi/fire-alert'


const Legend = () => {
    return (
        <div className="legend">
        <h2>Legend</h2>
        <ul>
            <li><strong>Wildfires: </strong><Icon icon={fireLocationIcon} className="fire-location-icon" /></li>
            <li><strong>Severe Weather: </strong><Icon icon={weatherLocationIcon} className="severe-weather-location-icon" /></li>
            <li><strong>Volcano: </strong><Icon icon={volcanoLocationIcon} className="volcano-location-icon" /></li>
        </ul>
        
    </div>
    )
}

export default Legend
