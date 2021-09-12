import React from 'react'
import './assets/css/navbar.css';
import {Link} from "react-router-dom";
function Navbar({selected}) {
    return (
        <nav>
            <header>Otaku<strong>Pedia</strong></header>
            <ul>
            <Link className="navItems"  to="/">
                <li className={selected==="home"?"active":""}>Home</li>
                </Link>
                <Link className="navItems" to="/anime">
                <li className={selected==="anime"?"active":""}>Anime</li>
                </Link>
                <Link className="navItems" to="/manga">
                <li className={selected==="manga"?"active":""}>Manga</li>
                </Link>
                
            </ul>
        </nav>
    )
}
export default Navbar;