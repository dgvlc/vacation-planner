import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className="nav">
      <Link classname="homepage-link" to="/">
        <h2>homepage</h2>
      </Link>
      <Link classname="top-link" to="/top-places">
        <h2>Top Vacations</h2>
      </Link>
        <Link classname="season-link" to="/vacations-by-seasons">
          <h2>Vacations by Seasons</h2>
        </Link>
    </div>
  )
}
