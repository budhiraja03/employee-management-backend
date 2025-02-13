# Employee Management System - Backend

## Description

This is the backend part of the **Employee Management System**, built with **Node.js**, **Express**, and **MongoDB**. The API allows users to manage employee records with basic **CRUD (Create, Read, Update, Delete)** functionality. Users can add new employees, fetch existing employees, update employee details, and delete employees. The system also ensures data validation (e.g., valid email format, non-empty name) and prevents duplicate email addresses.

## Features

- **CRUD Operations**: Create, Read, Update, Delete employee data.
- **Employee Data**: Each employee has the following details:
  - `name`: Employee's name.
  - `email`: Employee's email (unique).
  - `age`: Employee's age.
  - `salary`: Employee's salary.
- **Data Validation**: Ensures correct format for email and prevents empty fields for `name`, `age`, and `salary`.
- **MongoDB Integration**: Data is stored in MongoDB for persistence.

## Installation

Follow these steps to set up and run the backend locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (preferably the latest LTS version)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) for a cloud database or a local MongoDB instance.

### Steps

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/employee-management-backend.git
   cd employee-management-backend
2. **Install dependencies: Run the following command to install the required packages:**
   ```
   npm install
3. **Set up environment variables: Create a .env file in the root of the project and add your MongoDB URL and other environment-specific settings:**
    ```
    MONGO_URL=mongodb+srv://<your-mongo-db-url>
    PORT=5000
5. **Start the server: Run the following command to start the server in development mode:**
   ```
   npm run dev
   ```
   The backend API will now be available at http://localhost:5000.

6. **Test the API Endpoints**

   The API should now be running. You can test the following endpoints using Postman:

    - POST /api/employees - Add a new employee.
    - GET /api/employees - Get all employees.
    - PUT /api/employees/:id - Update employee details.
    - DELETE /api/employees/:id - Delete an employee.
      
   **Key Takeaways**
    - The _id is a unique MongoDB ObjectId assigned to each employee.
    - To update or delete, first fetch employees using GET and find the _id.
    - Then use that _id in the PUT/DELETE request URL.
      
7. **Error Handling**
   
   The backend API includes basic error handling for invalid inputs or missing required fields. Common error responses include:

    - 400 Bad Request: If required fields are missing or invalid.
    - 404 Not Found: If the employee with the provided ID doesn't exist.
    - 500 Internal Server Error: For any server-side issues.
      
## Logic Flow:

1. **MongoDB Integration(backend\config\db.js)**: The application uses **Mongoose**, an Object Data Modeling (ODM) library, to interact with MongoDB stored data in collection of documents format.

2. **Employee Schema(backend\models\Employee.js)**: The employee data follows a schema with the fields:
   - `name`: String (required)
   - `email`: String (unique, required)
   - `age`: Number (required)
   - `salary`: Number (required)

3. **CRUD Operations(backend\routes\employeeRoutes.js with backend\controllers\employeeController.js)**:
   - **Create**: New employee records are created via the `POST /api/employees` route. The backend ensures that the email is unique and valid before saving the data.
   - **Read**: All employees are retrieved via the `GET /api/employees` route.
   - **Update**: Employee details can be updated (e.g., name, email, age, salary) via the `PUT /api/employees/:id` route. The system allows for partial updates.
   - **Delete**: Employee records can be deleted using the `DELETE /api/employees/:id` route.

4. **Data Validation**: 
   - The backend performs validation to ensure that employee details like name, email, age, and salary are valid.
   - The email is checked for uniqueness before saving a new employee.
   - Validation ensures the presence of required fields and that the email format is correct.
