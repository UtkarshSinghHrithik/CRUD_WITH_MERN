import React from 'react';

const SearchUser = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
     <input 
  type="text" 
  placeholder="Search by name or email..." 
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "400px",
    border: "1px solid gray",
    borderRadius: "5px"
  }}
/>

    </div>
  );
};

export default SearchUser;
