const Employee = require('../../models/Employee.js')

const updateEmployee = async (req, res) => {
    try {
        const {employeeId} = req.params
        const newEmployeeData = req.body
        const updatedEmployee = await Employee.findOneAndUpdate({_id: employeeId}, newEmployeeData, {returnDocument: 'after'})
        return res.json(updatedEmployee)
    } catch (e) {
       res.status(500).json({message: 'Something happened in updateEmployee...'})
    }
}

module.exports = updateEmployee