import { useState } from "react"
import axios from "axios"
import { BASE_URL, headers } from "../services"
import { useHistory } from "react-router"

const defaultForm = {
  name: "",
  location: "",
  currency: 0,
  daysOfStay: 0,
  activities: "",
  season: "",
  numberOfPeople: 0,
  rating: 0,
  image: "",

}


export default function AddPlace() {
  const [input, setInput] = useState(defaultForm)
  const history = useHistory()
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(BASE_URL, { fields: input }, { headers })
    console.log(response)
    history.push("/")
  }
  return (
    <div>
      <h1>Add your Trip!</h1>
      <form onSubmit={handleSubmit}>
        <label>Put a cool title to your trip!</label>
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="name"
        />
        <label>Location</label>
        <input
          name="location"
          value={input.location}
          onChange={handleChange}
          placeholder="location"
        />
        <label>budget</label>
        <input
          name="currency"
          value={input.currency.valueAsNumber}
          onChange={handleChange}
          placeholder="budget"
        />
        <label>Stay Period</label>
        <input
          name="daysOfStay"
          value={input.daysOfStay.valueAsNumber}
          onChange={handleChange}
          placeholder="Stay Period"
        />
        <label>Activities</label>
        <input
          name="activities"
          value={input.activities}
          onChange={handleChange}
          placeholder="Activities"
        />
        <label>Season</label>
        <input
          name="season"
          value={input.season}
          onChange={handleChange}
          placeholder="Season"
        />
        <label>Number of people in the trip</label>
        <input
          name="numberOfPeople"
          value={input.numberOfPeople.valueAsNumber}
          onChange={handleChange}
          placeholder="Number of People"
        />
        <label>rate your experience from 1 - 5</label>
        <input
          name="rating"
          value={input.rating.valueAsNumber}
          onChange={handleChange}
          placeholder="Rating"
        />
        <label>A picture of where your trip is</label>
        <input
          name="image"
          value={input.image}
          onChange={handleChange}
          placeholder="Image"
        />
        <button>Add Trip</button>
      </form>
      
    </div>
  )
}
