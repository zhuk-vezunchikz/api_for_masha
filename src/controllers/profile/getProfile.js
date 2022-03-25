const Profile = require('../../models/Profile.js')


const getProfile = async (req, res) => {
    try {
        const profile = await Profile.find()
        return res.json(profile)
    } catch (e) {
        res.status(500).json({message: 'Something happened in getProfile...'})
    }
}

module.exports = getProfile