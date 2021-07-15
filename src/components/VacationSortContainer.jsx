import React from 'react'
import "./VacationSortContainer.css"

export default function VacationSortContainer(props) {
  const { vacation } = props
  
  return (
    <div className="sort-container">
      <h1>{vacation.fields.season}</h1>
      <h2>{vacation.fields.name}</h2>
      <div className="sort-image">
      <Link to={`/vacations/${vacation.id}`}>
        <img src={vacation.fields.image} />
        </Link>
      </div>
        <p className="sort-description">{vacation.fields.activities}</p>
    </div>
  )
}
