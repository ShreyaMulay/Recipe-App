const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/recipes', require('./routes/recipe'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
