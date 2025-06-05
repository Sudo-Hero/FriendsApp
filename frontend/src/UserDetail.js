import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserDetail extends Component {
    render() {
        // Sample user data (replace with API/data from props/state)
        const user = {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            dob: "1990-05-15",
            avatar: "https://i.pravatar.cc/150?img=3", // Random avatar
            joinDate: "2022-03-10",
            bio: "Software developer with 5+ years of experience in React and Node.js."
        };

        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* Back button */}
                        <Link to="/" className="btn btn-outline-secondary mb-4">
                            ← Back to Users
                        </Link>

                        {/* User Profile Card */}
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="text-center mb-4">
                                    <img 
                                        src={user.avatar} 
                                        alt={user.name} 
                                        className="rounded-circle mb-3" 
                                        width="120" 
                                        height="120"
                                    />
                                    <h2>{user.name}</h2>
                                    <p className="text-muted">{user.email}</p>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h6 className="text-muted">Date of Birth</h6>
                                            <p>{new Date(user.dob).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h6 className="text-muted">Member Since</h6>
                                            <p>{new Date(user.joinDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-muted">Bio</h6>
                                    <p className="text-muted">{user.bio}</p>
                                </div>

                                <div className="d-flex justify-content-end">
                                    <Link 
                                        to={`/users/${user.id}/edit`} 
                                        className="btn btn-primary me-2"
                                    >
                                        Edit Profile
                                    </Link>
                                    <button className="btn btn-outline-danger">
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDetail;