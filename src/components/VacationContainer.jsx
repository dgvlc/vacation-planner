import React from 'react'
import { Link } from 'react-router-dom'
import "./VacationContainer.css"

export default function VacationContainer(props) {
  const {vacation} = props 
  return (
    <div className="container">
      <div className="title-box">
      <h1 className="title">{vacation.fields.name}</h1>
      </div>
      <Link to={`/vacations/${vacation.id}`}>
          <img className="image" src={vacation.fields.image} alt={vacation.fields.name}/>
        </Link>
      <div className="description">
        <p>{vacation.fields.activities}</p>
      </div>
    </div>
  )
}
