const express = require("express");
const router = express.Router();

router.get("/admin", (req, res, next) => res.render("admin/admin.hbs"));

module.exports = router;
