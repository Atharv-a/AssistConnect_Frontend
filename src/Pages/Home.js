
import { useState, useEffect } from "react";
import Form from "../Components/Form";
import Details from "../Components/Details";
import axios from "axios";
import errorMessage from "../Utility";


export default function Home({setLoggedIn}) {
  const [formData, setFormData] = useState({
    description: null,
    servicetype: null,
    location: null
  })

  useEffect(() => {
    const jwt = localStorage.getItem("assistConnect_jwt")
    const id = localStorage.getItem("assistConnect_id")

    axios.get(`http://localhost:8080/getdata/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
    .then(response => {
      const data = response.data
      if (data.servicetype != null) {
        setFormData({
          description: data.description,
          servicetype: data.servicetype,
          location: data.location
        })
      }
      else{/*user will make  a submission*/}
    })
    .catch(error => {
      if(error.response.status === 403){setLoggedIn(false)}
      else errorMessage(error.message, "GetDataError")
    })
  }, [])

  return (
    <>
      <Form setFormData={setFormData} setLoggedIn={setLoggedIn}/>
      <Details formData={formData} />
    </>
  )
}
