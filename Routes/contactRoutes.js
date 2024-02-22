const express = require("express");
const router = express.Router();
const {
  getAllContact,
  postContact,
  updateContact,
  deleteContact,
  getContact,
} = require("../controllers/contactControllers");

router.route("/").get(getAllContact).post(postContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
