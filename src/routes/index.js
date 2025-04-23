// Import route modules
const creditRoutes = require('./creditRoutes');
const applicationRoutes = require('./applicationRoutes');
const adminRoutes = require('./adminRoutes');

// Define and export the router configuration
exports.routerApi = (app) => {
    // Set up routes for the credit simulation, application, and admin modules
    app.use('/simulate', creditRoutes);
    app.use('/application', applicationRoutes);
    app.use('/admin', adminRoutes);
};
