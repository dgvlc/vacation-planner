import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className="nav">
      <Link className="homepage-link" to="/">
        <h2>Homepage</h2>
      </Link>
      <Link className="top-link" to="/top-places">
        <h2>Top Vacations</h2>
      </Link>
        <Link className="season-link" to="/season-sort">
          <h2>Vacations by Seasons</h2>
        </Link>
    </div>
  )
}
