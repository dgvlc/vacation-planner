import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { BASE_URL, headers } from "../services"
import axios from "axios"
import "./VacationPlaceDetail.css"

export default function VacationPlaceDetail() {
  const [vacation, setVacation] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchVacation = async () => {

  const URL = `${BASE_URL}/${id}`
  const respose = await axios.get(URL, {
        headers,
      })
      setVacation(respose.data)
    }
    fetchVacation()
  }, [id])
  
  return (
    <div className="detail-body">
      <div>
      {vacation.fields?.name}
      </div>
      <div>
      {vacation.fields?.rating}
      </div>
      <div>
      <img className="image" src={vacation.fields?.image} alt={vacation.fields?.name}/>
      </div>
      <div className="detail-desc-box">
      <p>{vacation.fields?.activities}</p> 
      </div>

    </div>
  )
}
