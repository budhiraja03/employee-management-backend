const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Invalid email format"], // Regex for email validation
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"], // Ensuring employee is an adult
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
    min: [1, "Salary must be a positive number"], // Ensuring salary is positive
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;