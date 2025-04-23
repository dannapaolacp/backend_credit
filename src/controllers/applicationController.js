// Import model functions and regex utilities
const { createApplication, listApplications, updateApplicationStatus } = require('../models/applicationModel');
const { email, celular } = require('../utils/regex');

// Function to calculate the age from the birth date
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  
  // Adjust age if the birthday hasn't occurred yet this year
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Controller function to submit an application
const submitApplication = async (req, res) => {
  try {
    const {
      document_type, document_number, first_name, last_name, gender,
      birth_date, phone_number: phone, email: mail, amount, installments
    } = req.body;

    // Validate email and phone format using regex
    if (!email.test(mail)) return res.status(400).json({ error: 'Correo inválido' });
    if (!celular.test(phone)) return res.status(400).json({ error: 'Celular inválido' });

    // Ensure applicant is of legal age
    if (calculateAge(birth_date) < 18) return res.status(400).json({ error: 'Debes ser mayor de edad' });

    // Create a new application record
    const newApplication = await createApplication({
      document_type, document_number, first_name, last_name, gender,
      birth_date, phone_number: phone, email: mail, amount, installments
    });

    // Respond with a success message and the new application data
    res.status(201).json({
      mensaje: 'Gracias por registrar tu solicitud. Te contactaremos pronto.',
      application: newApplication
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar solicitud' });
  }
};

// Controller function to get all applications
const getApplications = async (req, res) => {
  try {
    const applications = await listApplications();
    res.json(applications);
  } catch {
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
};

// Controller function to change the status of an application
const changeApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate if the status is one of the allowed values
    if (!['pendiente', 'aprobada', 'rechazada'].includes(status)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }

    // Update the status of the application
    const result = await updateApplicationStatus(id, status);
    res.json(result);
  } catch {
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
};

// Export the controller functions for use in other parts of the application
module.exports = { submitApplication, getApplications, changeApplicationStatus };
