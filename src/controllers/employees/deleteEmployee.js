const Employee = require('../../models/Employee.js')

const deleteEmployee = async (req, res) => {
    try {
        const {employeeId} = req.params
        await Employee.findOneAndDelete({_id: employeeId})
        return res.json('Deleted')
    } catch (e) {
       res.status(500).json({message: 'Something happened in deleteEmployee...'})
    }
}

module.exports = deleteEmployee