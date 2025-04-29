import axios from 'axios';
import React, { useState } from 'react'
import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import "./AddUsers.css";   // CSS file import karna na bhool!
// import ThemeToggle from '../ThemeToggle';

const AddUsers = () => {

  const users = {
    name: "",
    email: "",
    address: ""
  }

  const [user, setUser] = useState(users)
  const Navigate = useNavigate()

  const inputHandle = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8000/api/user", user).then((response) => {
      toast.success("User created successfully")
      console.log('User created successfully', response.data)
      setTimeout(() => {
        Navigate("/")
      }, 1000)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="adduser-container">
      
      <Link to="/" className="adduser-back"> <FaBackward /> Back </Link>

      <h3 className="adduser-title">Add New User</h3>

      <form onSubmit={formSubmit} className="adduser-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' name='name' placeholder='Enter Your Name' onChange={inputHandle} />

        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email' placeholder='Enter Your Email' onChange={inputHandle} />

        <label htmlFor="address">Address:</label>
        <input type="text" id='address' name='address' placeholder='Enter Your Address' onChange={inputHandle} />

        <button type="submit" className="adduser-submit">Submit</button>
      </form>

      <Toaster />
    </div>
  )
}

export default AddUsers;
