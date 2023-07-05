import React from "react";
import'./Header.css';
// import {Link} from "react-router-dom";
function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <div className="container-fluid ">
                        <a href="/" className="navbar-brand">
                            <img src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png" alt="amazon" className="logo1"/>
                        </a>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <button onClick="geolocation()" className="a2"><i className="bi bi-geo-alt-fill"></i><p id="weather"></p></button>
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex ">
                                <input className="form-control me-2 box " type="text" placeholder="search for products"></input>
                                <button className="btn btn-primary " type="button"><i className="bi bi-search"></i></button>
                            </form>
                            <button className="btn btn-primary f2"><i className="bi bi-sun"></i></button>
                            <button type="button" className="btn btn-primary me-2">SignIn</button>
                            <button type="button" className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                </nav>
                <br />
                <nav className="navbar navbar-expand-sm box1 ">
                    <ul className="nav">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">All</a>
                            <ul className="dropdown-menu ">
                                <li><a href="#" className="dropdown-item">Watch</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle box10" href="#" role="button" data-bs-toggle="dropdown">Fashion</a>
                                    <ul className="dropdown-menu ">
                                        <li><a className="dropdown-item" href="#">Men's Cloths</a></li>
                                        <li><a className="dropdown-item" href="#">Women's Cloths</a></li>
                                        <li><a className="dropdown-item" href="#">Kid's Cloths</a></li>
                                    </ul>
                                </li>
                                <li><a className="dropdown-item" href="#">Automotive essentials</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="amazonlisting.html" className="nav-link">SmartWatch</a>
                        </li>
                        <li className="nav-item">
                            <a href="Amazonmobile.html" className="nav-link">Mobiles</a>
                        </li>
                        <li className="nav-item">
                            <a href="amazonauto.html" className="nav-link">Auto Essentials</a>
                        </li>
                        <li className="nav-item">
                            <a href="amazonpharmacy.html" className="nav-link">Amazon Pharma</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Customer Service</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Electronics</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Amazon Pay</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Fashion </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">New Releases</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>


    );
}

export default Header ;