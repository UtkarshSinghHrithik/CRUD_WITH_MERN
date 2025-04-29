import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams, useNavigate } from 'react-router-dom'
import "./UpdateUser.css"; // CSS file import kar lena

const UpdateUser = () => {

  const user = {
    name: "",
    email: "",
    address: ""
  }

  const [update, setUpdate] = useState(user)

  const { id } = useParams();
  const Navigate = useNavigate();

  const inputHandle = (e) => {
    const { name, value } = e.target
    setUpdate({ ...update, [name]: value })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`).then((response) => {
      setUpdate(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [id])

  const formSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8000/api/update/user/${id}`, update).then((response) => {
      console.log("User updated", response.data)
      toast.success("User updated")
      setTimeout(() => {
        Navigate("/")
      }, 1000)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="updateuser-container">
      <h3 className="updateuser-title">Update User</h3>

      <form onSubmit={formSubmit} className="updateuser-form">
        <label htmlFor="name">Name :</label>
        <input type="text" id='name' name='name' onChange={inputHandle} value={update.name || ""} />

        <label htmlFor="email">Email :</label>
        <input type="text" id='email' name='email' onChange={inputHandle} value={update.email || ""} />

        <label htmlFor="address">Address :</label>
        <input type="text" id='address' name='address' onChange={inputHandle} value={update.address || ""} />

        <button type="submit" className="updateuser-submit">Update</button>
      </form>

      <Toaster />
    </div>
  )
}

export default UpdateUser;
