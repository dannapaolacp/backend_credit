// Import Express and the controller function
const express = require('express');
const { submitApplication } = require('../controllers/applicationController');

// Create a new router instance
const router = express.Router();

// Define the POST route for submitting applications
router.post('/', submitApplication);

// Export the router to be used in other parts of the application
module.exports = router;
