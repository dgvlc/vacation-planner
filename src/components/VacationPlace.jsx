import { useState, useEffect } from 'react'
import { Base_URL, headers } from "../services"
import axios from "axios"

export default function VacationPlace() {
  const [vacations, setVacations] = useState([])
  
  useEffect(() => {
    const fetchVacations = async () => {
      const respose = await axios.get(BASE_URL, {
        headers,
      })
      setVacations(respose.data.records)
    }
    fetchVacations()
  }, [])

  return (
    <div>
      
    </div>
  )
}
