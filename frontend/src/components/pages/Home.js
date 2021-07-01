import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        //const result = await axios.get("http://localhost:3003/users");
        const result = await axios.get("http://127.0.0.1:8000/api/user/");
        //console.log(result);
        setUser(result.data);
    }

    const deleteUser = async id => {
        //await axios.delete(`http://localhost:3003/users/${id}`);
        await axios.delete(`http://127.0.0.1:8000/api/user/${id}/`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Dashboard</h1>
                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Name </th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    {/* <th scope="row">{user.id}</th> */}
                                    <td>{user.first_name+" "+user.last_name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link class="btn btn-primary mx-1" to={`/users/${user.id}`}>View</Link>
                                        {/* <Link class="btn btn-outline-primary mx-1" to={`/users/edit/${user.id}`}>Edit</Link> */}
                                        <Link class="btn btn-danger mx-1" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;