import React from 'react';
import NavBar from '../navBar';
import './header.css';

const Header = () => {
    return(
        <div className="headerPage">
        <div className="header">
            <div> Сокольский проспект 16</div>
            <div>4 8-555-333-222</div>
        </div>
        <NavBar/>
        </div>
    )
}

export default Header;
