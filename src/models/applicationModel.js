// Import database configuration
const db = require('../config/db');

// Function to create a new application
const createApplication = async (data) => {
  const {
    document_type, document_number, first_name, last_name,
    gender, birth_date, phone_number,
    email, amount, installments
  } = data;

  const query = `
    INSERT INTO credit_applications
    (document_type, document_number, first_name, last_name, gender, birth_date, phone_number, email, amount, installments)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;
  const values = [document_type, document_number, first_name, last_name, gender, birth_date, phone_number, email, amount, installments];
  
  // Execute the query to insert data into the database and return the created record
  const { rows } = await db.query(query, values);
  return rows[0];
};

// Function to list all applications
const listApplications = async () => {
  const { rows } = await db.query('SELECT * FROM credit_applications ORDER BY created_at DESC');
  return rows;
};

// Function to update the status of a specific application
const updateApplicationStatus = async (id, status) => {
  const { rows } = await db.query(
    'UPDATE credit_applications SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return rows[0];
};

// Export the functions to be used in other parts of the application
module.exports = { createApplication, listApplications, updateApplicationStatus };
