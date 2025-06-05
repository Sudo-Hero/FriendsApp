import React, { Component } from "react";
import ViewUsers from "./ViewUsers";

class RegistrationPage extends Component {
    render() {
        return (
            <div className="container registration-form">
                <form>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-block create-account">Create Account</button>
                    </div>
                </form>
                <div className="social-media">
                    <h5>Follow us on</h5>
                    <div className="social-icons">
                        <a href="https://facebook.com"><i className="icon-social-facebook" title="Facebook"></i></a>
                        <a href="https://google.com"><i className="icon-social-google" title="Google"></i></a>
                        <a href="https://x.com"><i className="icon-social-twitter" title="Twitter"></i></a>
                    </div>
                </div>
            </div>

        )
    }
}

export default RegistrationPage;