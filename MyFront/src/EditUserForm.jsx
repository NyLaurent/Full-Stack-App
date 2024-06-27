import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUserForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        business: '',
        employees: '',
        street: '',
        additional: '',
        zip: '',
        place: '',
        country: '',
        code: '',
        phone: '',
        email: '',
        termsAccepted: false,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/users/${id}`);
                setFormData(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/users/${id}`, formData);
            navigate('/users');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="page-content">
            <div className="form-v10-content">
                <form className="form-detail" onSubmit={handleSubmit}>
                    <div className="form-left">
                        <h2>Edit User Information</h2>
                        <div className="form-row">
                            <select name="title" value={formData.title} onChange={handleChange}>
                                <option value="">Title</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </select>
                            <span className="select-btn">
                                <i className="zmdi zmdi-chevron-down"></i>
                            </span>
                        </div>
                        <div className="form-group">
                            <div className="form-row form-row-1">
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-text" placeholder="First Name" required />
                            </div>
                            <div className="form-row form-row-2">
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-text" placeholder="Last Name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <select name="position" value={formData.position} onChange={handleChange}>
                                <option value="">Position</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Head Teacher">Head Teacher</option>
                                <option value="Chairman">Chairman</option>
                                <option value="Chairperson">Chairperson</option>
                            </select>
                            <span className="select-btn">
                                <i className="zmdi zmdi-chevron-down"></i>
                            </span>
                        </div>
                        <div className="form-row">
                            <input type="text" name="company" value={formData.company} onChange={handleChange} className="company" placeholder="Company" required />
                        </div>
                        <div className="form-group">
                            <div className="form-row form-row-3">
                                <input type="text" name="business" value={formData.business} onChange={handleChange} className="business" placeholder="Business Arena" required />
                            </div>
                            <div className="form-row form-row-4">
                                <select name="employees" value={formData.employees} onChange={handleChange}>
                                    <option value="">Employees</option>
                                    <option value="Trainee">Trainee</option>
                                    <option value="Colleague">Colleague</option>
                                    <option value="Associate">Associate</option>
                                </select>
                                <span className="select-btn">
                                    <i className="zmdi zmdi-chevron-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="form-right">
                        <h2>Contact Details</h2>
                        <div className="form-row">
                            <input type="text" name="street" value={formData.street} onChange={handleChange} className="street" placeholder="Street + Nr" required />
                        </div>
                        <div className="form-row">
                            <input type="text" name="additional" value={formData.additional} onChange={handleChange} className="additional" placeholder="Additional Information" required />
                        </div>
                        <div className="form-group">
                            <div className="form-row form-row-1">
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="zip" placeholder="Zip Code" required />
                            </div>
                            <div className="form-row form-row-2">
                                <select name="place" value={formData.place} onChange={handleChange}>
                                    <option value="">Place</option>
                                    <option value="Street">Street</option>
                                    <option value="District">District</option>
                                    <option value="City">City</option>
                                </select>
                                <span className="select-btn">
                                    <i className="zmdi zmdi-chevron-down"></i>
                                </span>
                            </div>
                        </div>
                        <div className="form-row">
                            <select name="country" value={formData.country} onChange={handleChange}>
                                <option value="">Country</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Korea">Korea</option>
                            </select>
                            <span className="select-btn">
                                <i className="zmdi zmdi-chevron-down"></i>
                            </span>
                        </div>
                        <div className="form-group">
                            <div className="form-row form-row-1">
                                <input type="text" name="code" value={formData.code} onChange={handleChange} className="code" placeholder="Code +" required />
                            </div>
                            <div className="form-row form-row-2">
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="phone" placeholder="Phone Number" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <input type="text" name="email" value={formData.email} onChange={handleChange} className="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email" />
                        </div>
                        <div className="form-checkbox">
                            <label className="container">
                                <p>I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.</p>
                                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="form-row-last">
                            <input type="submit" name="register" className="register" value="Update User" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserForm;
