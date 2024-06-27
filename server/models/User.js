const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    position: String,
    company: String,
    business: String,
    employees: String,
    street: String,
    additional: String,
    zip: String,
    place: String,
    country: String,
    code: String,
    phone: String,
    email: String,
    termsAccepted: Boolean
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
