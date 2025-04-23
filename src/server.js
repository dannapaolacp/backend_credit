// Import libraries
const express = require('express'); 
const cors = require('cors'); 
const { routerApi } = require("./routes"); 

// Define variables
const app = express();

// Server settings
app.use(cors()); 
app.use(express.json()); 

// Routes
routerApi(app); 

// Export the app module
module.exports = app; 
