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
      <div className="top-div">
      <div className="title">
      {vacation.fields?.name}
      </div>
      <div className="rating">
      <h1 className="rank-text">1-5 Rank# </h1>{vacation.fields?.rating}
        </div>
      </div>
      <div className="middle-div">
        <img className="image" src={vacation.fields?.image} alt={vacation.fields?.name}/>
        <div className="detail-desc-box">
        <p>{vacation.fields?.activities}</p> 
        </div>
      </div>
      <div className="bottom-div">
        <div className="location">
      Location: {vacation.fields?.location}
        </div>
        <div className="currency">
      Budget for the trip: {vacation.fields?.currency}
        </div>
        <div className="stay">
      Number of days in vacation: {vacation.fields?.daysOfStay}
        </div>
        <div className="season">
      Season: {vacation.fields?.season}
        </div>
        <div className="num-of-people">
      Number of people in vacation: {vacation.fields?.numberOfPeople}
          </div>
      </div>
    </div>
  )
}
