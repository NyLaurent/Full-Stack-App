import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersList.css';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="user-list">
            <h2>Registered Users</h2>
            <Link to="/">Create New User</Link>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.firstName} {user.lastName} - {user.email}
                        <button><Link to={`/user/${user._id}`}>View</Link></button>
                        <button><Link to={`/edit-user/${user._id}`}>Edit</Link></button>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
