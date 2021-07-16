import { useState, useEffect } from "react"
import axios from "axios"
import { SORT_URL, headers } from "../services"
import VacationSortContainer from "./VacationContainer"

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
      {vacations.map((vacation) => {
        return (
          <div>
            <h1>{vacation.fields.season}</h1>
          <VacationSortContainer key={vacation.id} vacation={vacation} />
          </div>
        )
      })}
    </div>
  )
}
