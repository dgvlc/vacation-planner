import React from 'react'
import { Link } from 'react-router-dom'

export default function VacationContainer(props) {
  const {vacation} = props 
  return (
    <div className="container">
      <h1>{ vacation.fields.name}</h1>
      <Link to={`/vacations/${vacation.id}`}>
        <img className="image"src={vacation.fields.image} />
      </Link>
        <p className="description">{vacation.fields.activities}</p>
    </div>
  )
}
