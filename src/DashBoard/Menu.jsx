import React, { useState } from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserLogOut } from '../Features/Slice';
import { BiSolidDashboard, BiMoneyWithdraw } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { MdOutlinePayment, MdOutlineMenu } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";

const Menu = () => {
  const userToken = useSelector((state) => state.mySlice.userToken);
  console.log(userToken);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setShowMenu(!showMenu);
  console.log(showMenu);

  return (
    <div className="Menubody">
      <div className="MenuHeader">
        <div className="MenuBack">
          <IoMdArrowBack className='Backicon' onClick={handleClick} />
        </div>
        <div className="MenuLayerHold">
          <div className="Menufirstlayer"></div>
          <div className="Menusecondlayer"></div>
        </div>
        <div className="MenuLogoText">
          <h4>TWOPAY</h4>
        </div>
      </div>
      <div className="MenuFeatures">
        <div className="NavLinkHold">
          <NavLink to='/userDash/maincontent'> <BiSolidDashboard /> Dashboard</NavLink>
          <NavLink to='/userDash/transfer'> <FaMoneyBillTransfer /> Transfer</NavLink>
          <NavLink to='/userDash/withdraw'> <BiMoneyWithdraw /> Withdraw</NavLink>
          <NavLink to='/userDash/deposit'> <IoAddCircle /> Deposit</NavLink>
          <NavLink to='/userDash/pay-bills'> <MdOutlinePayment /> Bills</NavLink>
          <NavLink to='/userDash/settings'> <FaGear /> Settings</NavLink>
        </div>
        <div className="UserProperties">
          <button onClick={() => dispatch(UserLogOut())}> <CiLogout /> Log Out</button>
        </div>
      </div>
      {
        showMenu === false ? (<MdOutlineMenu/>) : (<IoMdArrowBack/>)
      }
    </div>
  );
}

export default Menu;
