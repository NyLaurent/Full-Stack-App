// server.js file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userDetailsDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    app.use('/api/users', userRoutes);

// Define User model
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
    termsAccepted: Boolean,
});

// const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));