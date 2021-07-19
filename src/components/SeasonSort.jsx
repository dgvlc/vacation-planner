import { useState, useEffect } from "react"
import axios from "axios"
import { SORT_URL, headers } from "../services"
import VacationContainer from "./VacationContainer"

export default function SeasonFilter() {
  
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


  return (
    <div>
      {vacations.map((vacation) => {
        return (
          <div>
        
            {vacation.fields.season}
          <VacationContainer key={vacation.id} vacation={vacation} />
          </div>
        )
      })}
    </div>
  )
}
