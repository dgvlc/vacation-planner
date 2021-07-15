import { useState, useEffect } from 'react'
import { BASE_URL, headers } from "../services"
import axios from "axios"
import VacationContainer from './VacationContainer'
import { Link } from 'react-router-dom'

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
      {vacations.map((vacation) => {
        return <VacationContainer vacation={vacation} />
      })}
      <div>
        <Link to="/new-trip">
          <div className="add-box">
            <h1>add a new trip</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}
