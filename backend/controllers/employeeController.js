const Employee = require("../models/Employee");

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add new employee
exports.addEmployee = async (req, res) => {
  try {
    const { name, email, age, salary } = req.body;
    //check if email is already existing
    const existingEmployee = await Employee.findOne({ email });
    if(existingEmployee){
        return res.status(400).json({message:"Email is already existing!"});
    }
    const addingEmployee = new Employee({ name, email, age, salary });
    await addingEmployee.save();
    res.status(201).json(addingEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const { name, email, age, salary } = req.body;
    const employeeId = req.params.id;

    // Find the employee
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Check if email already exists or not
    if (email) {
      const existingEmployee = await Employee.findOne({ email });
      if (existingEmployee && existingEmployee._id.toString() !== employeeId) {
        return res.status(400).json({ message: "Email is already in use. Try with another email!" });
      }
    }

    // Update only provided fields
    if (name) employee.name = name;
    if (email) employee.email = email;
    if (age) employee.age = age;
    if (salary) employee.salary = salary;

    // Save the updated employee
    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};