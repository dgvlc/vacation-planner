import { useState, useEffect } from 'react'
import { BASE_URL, headers } from "../services"
import axios from "axios"
import VacationContainer from './VacationContainer'
import { Link } from 'react-router-dom'
import "./VacationPlace.css"

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
    <div className="box">
      <div>Vacation Planner</div>
      {vacations.map((vacation) => {
        return <VacationContainer key={vacation.id} vacation={vacation} />
      })}
      <div className="add-box">
        <Link className="add-link" to="/new-trip">
            <h1 className="add-text">add a new trip</h1>
        </Link>
      </div>
    </div>
  )
}
