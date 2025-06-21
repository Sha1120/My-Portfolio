import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header" >
            <ul className="header-list">
                <li className="header-item">
                    <a href="#home" className="header-link">Home</a>
                </li>
                <li className="header-item">
                    <a href="#about" className="header-link">About</a>
                </li>
                <li className="header-item">
                    <a href="#skills" className="header-link">Skills</a>
                </li>
                <li className="header-item">
                    <a href="#projects" className="header-link">Projects</a>
                </li>
                <li className="header-item">
                    <a href="#contact" className="header-link">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;