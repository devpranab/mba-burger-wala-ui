import React from 'react';
import './Header.scss';
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({isAuthenticated = false}) => {
    return (
        <nav>
            <div className="logo">
            <IoFastFoodOutline />
            </div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <FaUser /> : <FiLogIn />}
        </Link>
            </div>
        </nav>
    );
};

export default Header;