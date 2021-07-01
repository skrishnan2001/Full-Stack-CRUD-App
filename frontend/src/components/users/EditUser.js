import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        is_superuser: "",
    });

    const { first_name, last_name, username, email, password, is_superuser } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        //await axios.put(`http://localhost:3003/users/${id}`, user);
        await axios.put(`http://127.0.0.1:8000/api/user/${id}/`, user);
        history.push("/");
    };

    const loadUser = async () => {
        //const result = await axios.get(`http://localhost:3003/users/${id}`);
        const result = await axios.get(`http://127.0.0.1:8000/api/user/${id}/`);
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your First Name"
                            name="first_name"
                            value={first_name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Last Name"
                            name="last_name"
                            value={last_name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* <div className="form-group my-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div> */}
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Is Admin?"
                            name="is_superuser"
                            value={is_superuser}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block w-100">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;