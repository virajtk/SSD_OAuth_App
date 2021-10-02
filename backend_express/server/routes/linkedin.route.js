const express = require("express");
const linkedinController = require("../controllers/linkedin.controller");
const router = express.Router();

router.route("/")
    .post(linkedinController.getAccessToken);

module.exports = {
    router
}