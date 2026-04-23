import { useState, useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import LocationInfoBox from './LocationInfoBox'

const categoryConfig = {
  'drought':             { emoji: '🌵', label: 'Drought' },
  'dustHaze':            { emoji: '🌫️', label: 'Dust & Haze' },
  'wildfires':           { emoji: '🔥', label: 'Wildfire' },
  'floods':              { emoji: '🌊', label: 'Flood' },
  'severeStorms':        { emoji: '🌀', label: 'Storm' },
  'volcanoes':           { emoji: '🌋', label: 'Volcano' },
  'waterColor':          { emoji: '💧', label: 'Water Color' },
  'landslides':          { emoji: '⛰️', label: 'Landslide' },
  'seaLakeIce':          { emoji: '🧊', label: 'Sea & Lake Ice' },
  'earthquakes':         { emoji: '🫨', label: 'Earthquake' },
  'snow':                { emoji: '❄️', label: 'Snow' },
  'temperatureExtremes': { emoji: '🌡️', label: 'Temperature Extreme' },
  'manmade':             { emoji: '🏭', label: 'Manmade' },
}

const makeIcon = (emoji) =>
  L.divIcon({
    html: `<span style="font-size:1.6rem;line-height:1">${emoji}</span>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })

const Map = ({ eventData, center = { lat: 39.321, lng: -111.0937 }, zoom = 3 }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Init map once
    if (mapInstanceRef.current) return
    mapInstanceRef.current = L.map(mapRef.current).setView(
      [center.lat, center.lng],
      zoom
    )
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstanceRef.current)
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current || !eventData.length) return

    eventData.forEach((ev) => {
      const catId = ev.categories[0].id
      const config = categoryConfig[catId]
  console.log('catId:', catId, 'config:', config)
      if (!config) return

      const [lng, lat] = ev.geometry[0].coordinates
      const date = ev.geometry[0].date

      L.marker([lat, lng], { icon: makeIcon(config.emoji) })
        .addTo(mapInstanceRef.current)
        .on('click', () =>
          setLocationInfo({ id: ev.id, title: ev.title, date })
        )
    })
  }, [eventData])

  return (
    <div className="map">
      <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />
      {locationInfo && <LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)} />}

    </div>
  )
}

export default Map