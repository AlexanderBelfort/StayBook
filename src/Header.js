import React from 'react'
import "./Header.css";
import Logo from "./logo2.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header__icon" src={Logo} alt=""/>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Host Your Place</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>


        </div>
    )
}

export default Header
