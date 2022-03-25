const {Router} = require("express");
const getProfile = require("../controllers/profile/getProfile.js");

const profileRouter = Router();

profileRouter.get('/profile', getProfile)

module.exports = profileRouter

