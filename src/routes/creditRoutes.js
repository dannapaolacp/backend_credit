// Import Express and the controller function
const express = require('express');
const { simulateCredit } = require('../controllers/creditController');

// Create a new router instance
const router = express.Router();

// Define the POST route for simulating credit
router.post('/', simulateCredit);

// Export the router to be used in other parts of the application
module.exports = router;
