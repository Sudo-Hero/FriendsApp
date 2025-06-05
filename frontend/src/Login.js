import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      validated: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle login logic here
      console.log('Login submitted:', this.state);
    }
    this.setState({ validated: true });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  render() {
    const { validated, email, password, rememberMe } = this.state;
    
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm mt-5">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Login</h2>
                
                <form 
                  noValidate 
                  validated={validated.toString()} 
                  onSubmit={this.handleSubmit}
                  className={validated ? 'was-validated' : ''}
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                      placeholder="Enter email"
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                      minLength="6"
                      placeholder="Password"
                    />
                    <div className="invalid-feedback">
                      Password must be at least 6 characters.
                    </div>
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="rememberMe" 
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                  
                  <div className="mt-3 text-center">
                    <a href="#forgot-password" className="text-decoration-none">Forgot password?</a>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="mb-0">Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;