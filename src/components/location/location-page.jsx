import { useEffect, useState } from "react"
import axios from "axios"
const LocationPage = () => {
  const [data, setData] = useState([])

  useEffect(() =>{
    const getData = async () =>{
      const result = await axios.get(`https://rickandmortyapi.com/api/location`)
      const dataJson = await result.json()
      console.log(dataJson);
    }
    getData()
  },[])
  return (
    <div>
      {}
    </div>
  )
}

export default LocationPage