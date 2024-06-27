// index.js or server entry point

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config'); // Ensure correct path to your Sequelize configuration
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate().then(() => {
  console.log('Connection to the database has been established successfully.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
