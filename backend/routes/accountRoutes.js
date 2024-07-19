const express = require("express");
const { getBalance, transferBalance } = require("../controllers/account");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/balance", auth, getBalance);
router.post("/transfer", auth, transferBalance);

module.exports = router;
