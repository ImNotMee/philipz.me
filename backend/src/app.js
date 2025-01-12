const express = require('express');
const scraperRoutes = require('./routes/routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/posts', scraperRoutes);

module.exports = app;
