const express = require("express");
const {
  updateCredentials,
  searchFriend,
  getCurrentUser,
} = require("../controllers/user");
const { signup, signin } = require("../controllers/auth");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.put("/", auth, updateCredentials);
router.get("/bulk", auth, searchFriend);
router.get("/getCurrentUser", auth, getCurrentUser);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
