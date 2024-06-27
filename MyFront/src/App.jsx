import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetailsForm from './UserDetailsForm';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import EditUserForm from './EditUserForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserDetailsForm />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/edit-user/:id" element={<EditUserForm />} />
            </Routes>
        </Router>
    );
}

export default App;
