import React, { Component } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// HOC to pass `params` and `navigate` to class component
function withRouter(Component) {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
}

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '',
        name: '',
        email: '',
        dob: '',
      },
      loading: true,
      successMessage: '',
      errorMessage: ''
    };
  }

  componentDidMount() {
    const userId = this.props.params.id;

    fetch(`http://localhost/backend/public/index.php?action=getUser&id=${userId}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          this.setState({ user: data.user, loading: false });
        } else {
          this.setState({ errorMessage: data.message || 'User not found', loading: false });
        }
      })
      .catch(() => {
        this.setState({ errorMessage: 'Failed to fetch user data', loading: false });
      });
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;

    try {
      const response = await fetch(`http://localhost/backend/public/index.php?action=updateUser&id=${user.id}`, {
        method: 'POST', // or PUT if your backend supports it
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();

      if (data.status === 'success') {
        this.setState({ successMessage: 'User updated successfully!', errorMessage: '' });
        setTimeout(() => {
          this.props.navigate(`/user/${user.id}`);
        }, 2000);
      } else {
        this.setState({ errorMessage: data.message || 'Failed to update user' });
      }
    } catch (err) {
      this.setState({ errorMessage: 'Failed to update user' });
    }
  };

  render() {
    const { user, loading, successMessage, errorMessage } = this.state;

    if (loading) {
      return (
        <div className="container py-4 text-center">
          <div className="spinner-border text-primary" role="status" />
          <p>Loading user data...</p>
        </div>
      );
    }

    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Link to={`/dashboard`} className="btn btn-outline-secondary mb-4">
              ← Back
            </Link>

            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="mb-4">Edit User</h2>

                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
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
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                    <Link to={`/user/${user.id}`} className="btn btn-outline-danger">Cancel</Link>
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

export default withRouter(UserEdit);
