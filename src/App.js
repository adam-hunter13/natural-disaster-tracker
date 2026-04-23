import { useState, useEffect } from 'react'
import Map from "./components/Map"
import Loader from "./components/Loader"
import Header from './components/Header'
import Legend from './components/Legend'
import DateFilter from './components/DateFilter'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const fetchEvents = async (start = '', end = '') => {
    setLoading(true)
    let url = 'https://eonet.gsfc.nasa.gov/api/v3/events?'
    if (start) url += `&start=${start}`
    if (end) url += `&end=${end}`
    const res = await fetch(url)
    const { events } = await res.json()
    setEventData(events)
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        onStartChange={setStartDate}
        onEndChange={setEndDate}
        onApply={() => fetchEvents(startDate, endDate)}
        onClear={() => {
          setStartDate('')
          setEndDate('')
          fetchEvents()
        }}
      />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
      <Legend />
    </div>
  )
}

export default App