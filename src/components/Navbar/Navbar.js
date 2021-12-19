import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    const myFunction = () => {
        var x = document.getElementById("navmenu");
        var y = document.getElementById("nav-bar")
        if (x.className === "nav-menu") {
          x.className += " active";
        } else {
          x.className = "nav-menu";
        }
        if (y.className === "navbar") {
          x.className += " active";
        } else {
          x.className = "navbar";
        }
      }
    
    const func = () => {
        var x = document.getElementById("navmenu");
        var y = document.getElementById("ham");
        x.className="nav-menu";
        y.className="hamburger";
    }
    return (
        <header className="header sticky">
            <nav className="navbar" id="nav-bar">
                <Link to="/" className="nav-logo">iNews</Link>
                <ul className="nav-menu" id="navmenu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={func}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/business" title='Projects' className="nav-link" onClick={func}>Buisness</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/health" className="nav-link" onClick={func}>Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/science" className="nav-link" onClick={func}>Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sports" className="nav-link" onClick={func}>Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/technology" className="nav-link" onClick={func}>Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/entertainment" className="nav-link" onClick={func}>Entertainment</Link>
                    </li>
                </ul>
                {/* <Hamburger> */}
                    <div className="hamburger" id="ham" onClick={myFunction}>
                        <span className="bar" ></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div> 
                {/* </Hamburger> */}
                 
            </nav>
        </header>
    )
}

export default Navbar
