// Import Express and the controller functions
const express = require('express');
const { getApplications, changeApplicationStatus } = require('../controllers/applicationController');

// Create a new router instance
const router = express.Router();

// Define the GET route to fetch applications
router.get('/applications', getApplications);

// Define the PUT route to update the status of a specific application
router.put('/applications/:id', changeApplicationStatus);

// Export the router to be used in other parts of the application
module.exports = router;
