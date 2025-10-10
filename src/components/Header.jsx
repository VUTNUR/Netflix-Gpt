import React from 'react'
import logo from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className="h-[10%] px-24 py-2 bg-black/10">
      <img src={logo} alt="logo" width="180" className="drop-shadow-lg" />
    </div>
  );
};


export default Header