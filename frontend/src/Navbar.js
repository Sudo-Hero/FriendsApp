import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center" href="https://flowbite.com/">
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" height="32" className="d-inline-block align-text-top me-3" />
                        <span className="fs-4 fw-semibold">FriendsApp</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className="nav-link active" aria-current="page" >Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" >About</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" >Services</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" >Pricing</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" >Contact</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;