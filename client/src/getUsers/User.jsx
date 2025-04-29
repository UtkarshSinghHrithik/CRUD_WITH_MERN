/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router-dom';  
import toast, { Toaster } from 'react-hot-toast';
import "./User.css";  // Apna CSS bhi import karna na bhool
import User_search from '../SearchUser/User_search';
// import ThemeToggle from '../ThemeToggle';


const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success("User deleted");
        console.log("Deleted User ==>" , response.data)
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-container">
      
      <Link to="/add" className="add-user-btn">Add User <FaUserPlus /></Link>
 {/* <User_search/> */}
      <div className="user-cards">
        {users.length === 0 ? (
          <div>
            <h3>No Data to Display</h3>
            <p>Please Add New User</p>
          </div>
        ) : (
          users.map((user, index) => (
            <div className="user-card" key={index}>
              <p><strong>S No .</strong> {index+1}</p>

              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <div className="card-actions">
                <Link to={`/update/${user._id}`} className="edit-btn">
                  <FaPenToSquare />
                </Link>
                <button className="delete-btn" onClick={() => deleteUser(user._id)}>
                  <MdDelete />
                </button>
                <Toaster />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default User;
