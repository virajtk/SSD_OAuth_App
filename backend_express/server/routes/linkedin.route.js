const express = require("express");
const linkedinController = require("../controllers/linkedin.controller");
const router = express.Router();

router.route("/")
    .post(linkedinController.getAccessToken);

router.route("/profile_picture")
    .post(linkedinController.fetchProfilePicture);

router.route("/email")
    .post(linkedinController.fetchEmail);

router.route("/post")
    .post(linkedinController.createPost);

module.exports = {
    router
}