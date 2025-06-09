import React, { Component } from "react";
import ViewUsers from "../ViewUsers";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            phone: "",
            dob: "",
            errorMessage: "",
            successMessage: "",
            loading: false,
        };
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value, errorMessage: "", successMessage: "" });
    };

    handleSubmit = async () => {
        const { username, password, email, phone, dob } = this.state;

        if (!username || !password || !email || !phone || !dob) {
            this.setState({ errorMessage: "All fields are required" });
            return;
        }

        this.setState({ loading: true, errorMessage: "", successMessage: "" });

        try {
            const formData = new FormData();
            formData.append("name", username);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("dob", dob);
            formData.append("password", password);

            const response = await fetch("http://localhost/backend/public/index.php?action=register", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.status === "success") {
                localStorage.setItem("token", result.token);
                localStorage.setItem("userEmail", result.email);

                this.setState({
                    successMessage: "Account created and logged in successfully!",
                    username: "",
                    password: "",
                    email: "",
                    phone: "",
                    dob: "",
                    loading: false,
                });

                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000);
            } else {
                this.setState({ errorMessage: result.message || "Registration failed.", loading: false });
            }
        } catch (error) {
            console.error(error);
            this.setState({ errorMessage: "Something went wrong. Please try again.", loading: false });
        }
    };


    render() {
        const { username, password, email, phone, dob, errorMessage, successMessage } = this.state;

        return (
            <div className="container registration-form">
                <ViewUsers/>
                <form>
                    <div className="form-icon">
                        <span><i className="icon icon-user"></i></span>
                    </div>

                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}

                    <div className="form-group">
                        <input type="text" className="form-control item" id="username" value={username} onChange={this.handleChange} placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" value={password} onChange={this.handleChange} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control item" id="email" value={email} onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone" value={phone} onChange={this.handleChange} placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control item" id="dob" value={dob} onChange={this.handleChange} placeholder="Birth Date" />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <button
                                type="button"
                                className="btn btn-block create-account"
                                onClick={this.handleSubmit}
                                disabled={this.state.loading}
                            >
                                {this.state.loading ? (
                                    <span>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Adding User...
                                    </span>
                                ) : (
                                    "Add User"
                                )}
                            </button>
                        </div>
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
        );
    }
}

export default Dashboard;
