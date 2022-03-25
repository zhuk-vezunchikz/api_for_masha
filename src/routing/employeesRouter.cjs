const {Router} = require("express");
const getAllEmployees = require("../controllers/employees/getAllEmployees.js");
const addEmployee = require("../controllers/employees/addEmployee.js");
const updateEmployee = require("../controllers/employees/updateEmployee.js");
const deleteEmployee = require("../controllers/employees/deleteEmployee.js");

const employeesRouter = Router();
const EMPLOYEES_ROUTER = '/employees'


employeesRouter.get(EMPLOYEES_ROUTER, getAllEmployees)
employeesRouter.post(EMPLOYEES_ROUTER, addEmployee)
employeesRouter.put(`${EMPLOYEES_ROUTER}/:employeeId`, updateEmployee)
employeesRouter.delete(`${EMPLOYEES_ROUTER}/:employeeId`, deleteEmployee)

module.exports = employeesRouter

