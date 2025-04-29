import React, { useEffect, useState } from 'react';
import SearchUser from './SearchUser'; // import karo
import axios from 'axios';

const User_search = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // new state

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    };
    fetchData();
  }, []);

  // Filtered users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <SearchUser searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {users
  .filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((user, index) => (
    <div key={index} className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address}</p>
      {/* Update/Delete buttons yahan */}
    </div>
))}
    </div>
  );
};

export default User_search;
