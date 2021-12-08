import { useState, useEffect } from 'react'
import Map from "./components/Map";
import Loader from "./components/Loader"
import Header from './components/Header'
import Legend from './components/Legend';


function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents ()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
      <Legend />
    </div>
  );
}

export default App;
