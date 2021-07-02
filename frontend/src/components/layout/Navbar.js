import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [userid, setUserId] = useState();
    const whoami = () => {
        fetch("/userapi/whoami/", {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin",
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log("You are logged in as: " + data.username);
                //console.log("ID : ", data.id);
                //console.log("Is Admin ? : ", data.is_superuser);
                setUserId(data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    //whoami();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container-fluid">
                <Link className="navbar-brand" to="#">CRUD App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                    </ul>

                </div>
                {whoami()}
                <Link className="btn btn-outline-light" to={"/users/edit/" + userid}>Edit Details</Link>
            </div>
        </nav>
    )
}

export default Navbar;