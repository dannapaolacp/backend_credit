CREATE TABLE IF NOT EXISTS credit_applications (
  id SERIAL PRIMARY KEY,
  document_type VARCHAR(10) NOT NULL,
  document_number BIGINT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  birth_date DATE NOT NULL,
  phone_number VARCHAR(13) NOT NULL,
  email VARCHAR(100) NOT NULL,
  amount BIGINT NOT NULL CHECK (amount BETWEEN 100000 AND 100000000),
  installments INT NOT NULL CHECK (installments BETWEEN 2 AND 24),
  status VARCHAR(20) DEFAULT 'pendiente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);