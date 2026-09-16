const express = require("express");
const router = express.Router();

const {
  getCertificate
} = require("../controllers/certificateController");

router.get("/:certificateId", getCertificate);

module.exports = router;