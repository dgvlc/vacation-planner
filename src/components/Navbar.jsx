import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <h2>homepage</h2>
      </Link>
      <Link to="/top-places">
        <h2>Top Vacations</h2>
        <Link to="/vacations-by-seasons">
          <h2>Vacations by Seasons</h2>
        </Link>

      </Link>
    </div>
  )
}
