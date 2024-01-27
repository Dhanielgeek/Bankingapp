import React from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserLogOut } from '../Features/Slice';

const Menu = () => {
  const userToken = useSelector((state) => state.mySlice.userToken) 
  console.log(userToken);
   const dispatch = useDispatch()
  return (
    <div className="Menubody">
      <div className="MenuHeader">
        <div className="MenuLayerHold">
          <div className="Menufirstlayer"></div>
          <div className="Menusecondlayer"></div>
        </div>
        <div className="MenuLogoText">
          <h4>TWOPAY</h4>
        </div>
      </div>
      <div className="MenuFeatures">
        <NavLink to='/userDash/maincontent'>Dashboard</NavLink>
        <NavLink to='/userDash/transfer'>Transfer</NavLink>
        <NavLink to='/userDash/withdraw'>Withdraw</NavLink>
        <NavLink to='/userDash/deposit'>Deposit</NavLink>
        <NavLink to='/userDash/pay-bills'>Pay Bills</NavLink>
        <NavLink to='/userDash/settings'>Settings</NavLink>
        <div className="UserProperties">
      <button onClick={()=> dispatch(UserLogOut())}>Log Out</button>
      </div>
      </div>
    </div>
  );
}

export default Menu;