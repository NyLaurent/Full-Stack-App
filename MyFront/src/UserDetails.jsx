import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/${id}`);
                setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>User Details</h2>
            <p>Title: {user.title}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Position: {user.position}</p>
            <p>Company: {user.company}</p>
            <p>Business: {user.business}</p>
            <p>Employees: {user.employees}</p>
            <p>Street: {user.street}</p>
            <p>Additional Information: {user.additional}</p>
            <p>Zip Code: {user.zip}</p>
            <p>Place: {user.place}</p>
            <p>Country: {user.country}</p>
            <p>Code: {user.code}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Terms Accepted: {user.termsAccepted ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default UserDetails;
