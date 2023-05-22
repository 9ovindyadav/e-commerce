const { userLogin, userRegister, forgotPassword, resetPassword } = require("../controllers/user");

const router = require("express").Router() ;

router.route("/login").post(userLogin);
router.route("/register").post(userRegister);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").patch(resetPassword);

module.exports = router ;