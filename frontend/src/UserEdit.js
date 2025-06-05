import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        name: '',
        email: '',
        dob: '',
        avatar: ''
      },
      loading: true,
      successMessage: ''
    };
  }

  componentDidMount() {
    // In a real app, you would fetch user data from an API
    // using the ID from URL params (this.props.params.id)
    const userId = this.props.params?.id;
    
    // Simulating API fetch with timeout
    setTimeout(() => {
      this.setState({
        user: {
          id: userId,
          name: 'John Doe',
          email: 'john@example.com',
          dob: '1990-05-15',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        loading: false
      });
    }, 500);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user
    console.log('Updated user:', this.state.user);
    
    // Show success message
    this.setState({ successMessage: 'User updated successfully!' });
    
    // Hide message after 3 seconds
    setTimeout(() => {
      this.setState({ successMessage: '' });
    }, 3000);
  };

  render() {
    const { user, loading, successMessage } = this.state;

    if (loading) {
      return (
        <div className="container py-4">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading user data...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Link to={`/user/${user.id}`} className="btn btn-outline-secondary mb-4">
              ← Back to User Profile
            </Link>

            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="mb-4">Edit User</h2>
                
                {successMessage && (
                  <div className="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}

                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      name="dob"
                      value={user.dob}
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="avatar" className="form-label">Avatar URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="avatar"
                      name="avatar"
                      value={user.avatar}
                      onChange={this.handleInputChange}
                    />
                    {user.avatar && (
                      <div className="mt-2">
                        <img 
                          src={user.avatar} 
                          alt="Preview" 
                          className="img-thumbnail" 
                          width="100"
                        />
                      </div>
                    )}
                  </div>

                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                    <Link to={`/user/${user.id}`} className="btn btn-outline-danger">
                      Cancel
                    </Link>
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

// Wrapper component to use hooks with class component
export default UserEdit;