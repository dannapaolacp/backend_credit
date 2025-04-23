// Import the Express app
const app = require('./server');

// Set the port to the environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
