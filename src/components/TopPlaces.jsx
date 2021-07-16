import { useState, useEffect } from 'react'
import axios from 'axios'
import { TOP_URL, headers } from '../services'
import VacationContainer from './VacationContainer'


export default function TopPlaces() {
  const [topVacations, setTopVacations] = useState([])

  useEffect(() => {
    const fetchVacations = async () => {
      
      const response = await axios.get(TOP_URL, {
        headers,
      })
      setTopVacations(response.data.records)
    }
    fetchVacations()
  }, [])

  return (
    <div>
      {topVacations.map((vacation) => {
        return <VacationContainer key={vacation.id} vacation={vacation} />
      })}
      
    </div>
  )
}
