import { useState, useEffect } from 'react'
import Map from "./components/Map";
import Loader from "./components/Loader"
import Header from './components/Header'
import Legend from './components/Legend';
import events from './components/events'


function App() {
  const [eventData, setEventData] = useState(events)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // IF NASA GETS BACK WITH INFO UNBLOCK LINES 15-25 IN
    // const fetchEvents = async () => {
    //   setLoading(true)
    //   const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=Tn92YFI4mOre4i9L9c43C6tC3hSeqZ1uxOM2iey8')
    //   console.log(res)
    //   const { events } = await res.json()

    //   setEventData(events)
    //   setLoading(false)
    // }

    // fetchEvents ()

    // IF NASA GETS BACK CODE THE FOLLOWING LINE OUT
    setEventData(events)
    console.log(eventData)

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