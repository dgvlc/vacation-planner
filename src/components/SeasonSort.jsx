import { useState, useEffect } from "react"
import axios from "axios"
import { SORT_URL, headers } from "../services"
import VacationContainer from "./VacationContainer"

export default function SeasonFilter() {
  const [sortedSeasonTrip, setSortedSeasonTrip] = useState([])
  const [vacations, setVacations] = useState([])

  useEffect(() => {
    const fetchVacations = async () => {

      const response = await axios.get(SORT_URL, {
        headers,
      })
      
      setVacations(response.data.records)
    }
    fetchVacations()
  }, [])

  useEffect(() => {

    setSortedSeasonTrip(vacations)
  }, [vacations])

  return (
    <div>
      <h1>sorted list</h1>
      {vacations.map((vacation) => {
        return <VacationContainer vacation={vacation}/>
      })}
    </div>
  )
}
