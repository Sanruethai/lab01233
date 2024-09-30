const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/lab0', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
