const Employee = require('../../models/Employee.js')


const addEmployee = async (req, res) => {
    try {
        const newEmployee = req.body
        const [employee] = await Employee.create([newEmployee])
        return res.json(employee)
    } catch (e) {
       res.status(500).json({message: 'Something happened in getAllEmployees...'})
    }
}

module.exports = addEmployee