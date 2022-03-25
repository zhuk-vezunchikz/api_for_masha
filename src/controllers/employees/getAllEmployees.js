const Employee = require('../../models/Employee.js')


const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        return res.json(employees)
    } catch (e) {
       req.status(500).json({message: 'Something happened in getAllEmployees...'})
    }
}

module.exports = getAllEmployees