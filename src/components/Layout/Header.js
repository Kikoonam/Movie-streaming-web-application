import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className= {classes.header}>
      <img  className = {classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" />
      <nav className={classes.nav}>
        <a >
            <Link to="/Home">
            <img src="/images/home-icon.svg"></img>
            <span> HOME </span>
            </Link>
        </a>
        
        <a>
            <Link to='/WatchList'>
          <img src="/images/watchlist-icon.svg"></img>
          <span>WATCHLIST</span>
          </Link>
        </a>

        <a>
          <Link to='/Movie'>
            <img src="/images/movie-icon.svg"></img>
            <span>MOVIES</span>
          </Link>
        </a>

        <a>
          <Link to='/Series'>
            <img src="/images/series-icon.svg"></img>
            <span>SERIES</span>
          </Link>
        </a>
     
      </nav>
      
      <a className= {classes.login}>Login</a>
     
   </header>
  );
}

export default Header;




  
 
   

   



