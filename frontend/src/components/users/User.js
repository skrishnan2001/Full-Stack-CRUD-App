import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        is_superuser: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        //const res = await axios.get(`http://localhost:3003/users/${id}`);
        const res = await axios.get(`http://127.0.0.1:8000/api/user/${id}/`);

        setUser(res.data);
    };
    return (
        <div className="container py-4">
            {/* <Link className="btn btn-primary" to="/">
                back to Home
            </Link> */}
            <h1 className="display-4"><strong>USER ID: {id}</strong></h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">First Name: {user.first_name}</li>
                <li className="list-group-item">Last Name: {user.last_name}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">User Name: {user.username}</li>
                {/* <li className="list-group-item">Password: {user.password}</li> */}
                <li className="list-group-item">Is Admin? : {(user.is_superuser).toString()}</li>
            </ul>
        </div>
    );
};

export default User;