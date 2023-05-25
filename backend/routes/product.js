const { createProduct } = require("../controllers/product");
const {authorizationMiddleware, authorizedAdmin} = require("../middlewares/auth");

const router = require("express").Router();

router.route("/create").post(authorizationMiddleware,authorizedAdmin,createProduct);

module.exports = router;