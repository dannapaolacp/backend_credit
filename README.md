# Backend Credit

## Description

**Credit Backend** is a backend application developed with Node.js and Express to facilitate credit simulation.

## Characteristics

- **Easy Integration**: Easily integrate credit simulation into your existing financial management system using a RESTful API.
- **Customization**: Configure credit validation parameters according to your organization's specific needs.
- **Security**: Implement robust security measures to protect sensitive customer data and ensure regulatory compliance.
- **Detailed Documentation**: Provides complete API documentation for easy implementation and use.

## **Previous** requirements

- Node.js (version 23.11.0)
- npm (Node.js package manager)
- Supported database (PostgreSQL)

## 1. Initial Project Configuration

### 1.1. Clone this repository to your local machine:

```bash
git clone git@gitlab.com:credit_backend.git

```

### 1.2. Navigate to the project directory:

```bash
cd Backend_Credit

```

### 1.3. Install project dependencies:

```bash
npm install
```

### 1.4. Prepare Environment Variables

The application requires a file containing the data necessary for the connection to the **credits_db** database.

## Sensitive Environment Variables

### 1.5. A file called **.env** must be created within the project root and must store the following content:

```
# Database connection parameters
DATABASE_URL="<Connection string to the database>"

```

### 1.6. Database Configuration

```
-- Create database
CREATE DATABASE credits_db;

-- Create table
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

```

## 2. Start Project

### 2.1. Start the development server:

```bash
npm run dev

```

## Use

1. Access the API via the default local URL:

   ```bash
   http://localhost:3000

   ```

## Author

**Danna Capera**
