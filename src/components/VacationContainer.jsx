import React from 'react'
import { Link } from 'react-router-dom'
import "./VacationContainer.css"

export default function VacationContainer(props) {
  const {vacation} = props 
  return (
    <div className="container">
      <h1>{vacation.fields.name}</h1>
      <div className="image-container">
      <Link to={`/vacations/${vacation.id}`}>
          <img className="image" src={vacation.fields.image} alt={vacation.fields.name}/>
        </Link>
      </div>
      <div className="description">
        <p>{vacation.fields.activities}</p>
      </div>
    </div>
  )
}
