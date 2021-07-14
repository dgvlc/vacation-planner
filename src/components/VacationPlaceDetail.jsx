import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { BASE_URL, headers } from "../services"
import axios from "axios"

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
    <div>
      {vacation.fields?.name}
    </div>
  )
}
