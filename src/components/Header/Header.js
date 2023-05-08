import React,{useState} from "react";
import "./Header.scss";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="Header">
      <Link to = '/'>
        <h2>Movie Search</h2>
        </Link>
    </div>
  );
};

export default Header;
