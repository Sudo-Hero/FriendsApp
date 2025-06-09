import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost/backend/public/index.php?action=getUser&id=${id}`, {
                    headers: { Authorization: localStorage.getItem("token") },
                });
                const data = await response.json();
                if (data.status === "success") {
                    setUser(data.user);
                } else {
                    setError(data.message || "User not found");
                }
            } catch {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [id]);

    if (loading) {
        return <div>Loading user details...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!user) {
        return <div>No user data found.</div>;
    }

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Link to="/" className="btn btn-outline-secondary mb-4">
                        ← Back to Users
                    </Link>

                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <img
                                src={user.avatar || `https://i.pravatar.cc/150?u=${user.email}`}
                                alt={user.name}
                                className="rounded-circle mb-3"
                                width="120"
                                height="120"
                            />
                            <h2>{user.name}</h2>
                            <p className="text-muted">{user.email}</p>

                            <div className="row mt-4 text-start">
                                <div className="col-md-6">
                                    <h6 className="text-muted">Date of Birth</h6>
                                    <p>{new Date(user.dob).toLocaleDateString()}</p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="text-muted">Member Since</h6>
                                    <p>{new Date(user.joinDate).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="mt-4 text-start">
                                <h6 className="text-muted">Bio</h6>
                                <p>{user.bio || "No bio provided."}</p>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <Link to={`/users/${user.id}/edit`} className="btn btn-primary me-2">
                                    Edit Profile
                                </Link>
                                <button className="btn btn-outline-danger">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
