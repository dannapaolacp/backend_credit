// Function to simulate a credit payment plan
const simulateCredit = (req, res) => {
  const { amount, installments } = req.body;

  // Validate the input data (amount and installments)
  if (amount < 100000 || amount > 100000000 || installments < 2 || installments > 24) {
    return res.status(400).json({ error: 'Valores fuera de rango' }); // Return error if values are out of range
  }

  // Calculate the value of each installment
  const installmentValue = parseFloat((amount / installments).toFixed(2));
  const plan = [];

  // Generate the payment plan with installments and remaining balance
  for (let i = 1; i <= installments; i++) {
    plan.push({
      installment: i, // Current installment number
      installmentValue, // The amount to be paid per installment
      remainingBalance: parseFloat((amount - installmentValue * i).toFixed(2)) // Remaining balance after this installment
    });
  }

  // Return the generated plan as a response
  return res.status(200).json({ plan });
};

// Export the simulateCredit function for use in other modules
module.exports = { simulateCredit };
