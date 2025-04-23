// Exporting a set of regular expressions for validation

module.exports = {
  // Regular expression for validating an email address
  email: /^[\w.-]+@[\w.-]+\.\w+$/,
  
  // Regular expression for validating a phone number (10 to 13 digits)
  celular: /^\d{10,13}$/
};
