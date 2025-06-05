import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewUsers extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end">
                <h2>Users List</h2>
                <ul className="list-group list-users w-25 mt-5">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <div>
                            <Link className="btn btn-sm btn-outline-primary me-2" to="/user/1">View</Link>
                            <Link className="btn btn-sm btn-outline-secondary" to="/user/edit/1">Edit</Link>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ViewUsers;