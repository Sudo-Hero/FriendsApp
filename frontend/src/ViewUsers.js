import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            error: null,
        };
    }
    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost/backend/public/index.php?action=getUsers", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            const data = await response.json();

            if (data.status === "success") {
                this.setState({ users: data.users, loading: false });
            } else {
                this.setState({ error: data.message, loading: false });
            }
        } catch (error) {
            this.setState({ error: "Failed to fetch users", loading: false });
        }
    };
    render() {
        const { users, loading, error } = this.state;

        if (loading) {
            return <div>Loading users...</div>;
        }

        if (error) {
            return <div className="alert alert-danger">{error}</div>;
        }

        return (
            <div className="d-flex justify-content-end">
                <h2>Users List</h2>
                <ul className="list-group list-users w-25 mt-5">
                    {users.length === 0 && <li className="list-group-item">No users found.</li>}
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {user.name}
                            <div>
                                <Link
                                    className="btn btn-sm btn-outline-primary me-2"
                                    to={`/user/${user.id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-sm btn-outline-secondary"
                                    to={`/user/edit/${user.id}`}
                                >
                                    Edit
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default ViewUsers;