import React from 'react'
import { Icon } from '@iconify/react'
import fireLocationIcon from '@iconify/icons-mdi/fire-alert'
import weatherLocationIcon from '@iconify/icons-mdi/weather-hurricane'
import volcanoLocationIcon from '@iconify/icons-mdi/peak'
import droughtLocationIcon from '@iconify/icons-mdi/water-drop'
import dustLocationIcon from '@iconify/icons-mdi/dirty'
import earthquakeLocationIcon from '@iconify/icons-mdi/lightning-bolt'
import floodLocationIcon from '@iconify/icons-mdi/flood'
import landslidesLocationIcon from '@iconify/icons-mdi/mountain'
import manmadeLocationIcon from '@iconify/icons-mdi/construction'
import seaAndLakeLocationIcon from '@iconify/icons-mdi/cup-ice'
import snowLocationIcon from '@iconify/icons-mdi/snowflake'
import temperatureExtremesLocationIcon from '@iconify/icons-mdi/warning-circle'
import waterColorLocationIcon from '@iconify/icons-mdi/water-flow'


const Legend = () => {
    return (
        <div className="legend">
        <h2>Legend</h2>
        <ul>
            <li><strong>Drought: </strong><Icon icon={droughtLocationIcon} className="drought-location-icon" /></li>
            <li><strong>Dust: </strong><Icon icon={dustLocationIcon} className="dust-location-icon" /></li>
            <li><strong>Earthquake: </strong><Icon icon={earthquakeLocationIcon} className="earthquake-location-icon" /></li>
            <li><strong>Flood: </strong><Icon icon={floodLocationIcon} className="flood-location-icon" /></li>
            <li><strong>Landslides: </strong><Icon icon={landslidesLocationIcon} className="landslides-location-icon" /></li>
            <li><strong>Manmade: </strong><Icon icon={manmadeLocationIcon} className="manmade-location-icon" /></li>
            <li><strong>Sea and Lake Ice: </strong><Icon icon={seaAndLakeLocationIcon} className="seaAndLake-location-icon" /></li>
            <li><strong>Severe Weather: </strong><Icon icon={weatherLocationIcon} className="severe-weather-location-icon" /></li>
            <li><strong>Snow: </strong><Icon icon={snowLocationIcon} className="snow-location-icon" /></li>
            <li><strong>Extreme Temperature: </strong><Icon icon={temperatureExtremesLocationIcon} className="temperatureExtremes-location-icon" /></li>
            <li><strong>Volcano: </strong><Icon icon={volcanoLocationIcon} className="volcano-location-icon" /></li>
            <li><strong>Water Color: </strong><Icon icon={waterColorLocationIcon} className="waterColor-location-icon" /></li>
            <li><strong>Wildfires: </strong><Icon icon={fireLocationIcon} className="fire-location-icon" /></li>
        </ul>
        
    </div>
    )
}

export default Legend
