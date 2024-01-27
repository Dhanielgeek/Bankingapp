import React from 'react';
import './dashboard.css';
import {  useSelector } from 'react-redux';


const UserHeader = () => {
 
  const user = useSelector((state)=> state.mySlice.user)

  return (
    <div className="UserHeader">
      <div className="UserName">
        <h3>Welcome {user?.firstName}</h3>
      </div>    
    </div>
  );
};

export default UserHeader;