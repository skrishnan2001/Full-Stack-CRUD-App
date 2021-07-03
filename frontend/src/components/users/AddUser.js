import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        is_superuser: "false",
    });

    const [role, setRole] = useState('false');

    const changeRole = (newRole) => {
        setRole(newRole)
        user.is_superuser = newRole;
    }


    const { first_name, last_name, username, email, password } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        //await axios.post("http://localhost:3003/users", user);
        //await axios.post("http://127.0.0.1:8000/api/user/", user);
        await axios.post("http://127.0.0.1:8000/userapi/register/", user);
        console.log(user);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your First Name"
                            name="first_name"
                            value={first_name}
                            onChange={e => onInputChange(e)}
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group my-3">
                        {/* <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Is Admin ?"
                            name="is_superuser"
                            value={is_superuser}
                            onChange={e => onInputChange(e)}
                            required
                        /> */}
                        <select class="browser-default custom-select"
                            value={role}
                            onChange={(event) => changeRole(event.target.value)}
                        >
                            <option value="false">Normal User</option>
                            <option value="true">Admin</option>
                        </select>

                    </div>
                    <button className="btn btn-primary btn-block w-100">Register</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;