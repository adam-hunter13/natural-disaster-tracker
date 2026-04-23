import React from 'react'

const legendItems = [
  { emoji: '🌵', label: 'Drought' },
  { emoji: '🌫️', label: 'Dust & Haze' },
  { emoji: '🫨', label: 'Earthquake' },
  { emoji: '🌊', label: 'Flood' },
  { emoji: '⛰️', label: 'Landslides' },
  { emoji: '🏭', label: 'Manmade' },
  { emoji: '🧊', label: 'Sea & Lake Ice' },
  { emoji: '🌀', label: 'Severe Storm' },
  { emoji: '❄️', label: 'Snow' },
  { emoji: '🌡️', label: 'Extreme Temperature' },
  { emoji: '🌋', label: 'Volcano' },
  { emoji: '💧', label: 'Water Color' },
  { emoji: '🔥', label: 'Wildfire' },
]

const Legend = () => {
  return (
    <div className="legend">
      <h2>Legend</h2>
      <ul>
        {legendItems.map(({ emoji, label }) => (
          <li key={label}>
            <span style={{ marginRight: '8px', fontSize: '1.4rem' }}>{emoji}</span>
            <strong>{label}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Legend