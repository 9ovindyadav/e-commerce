const { createProduct } = require("../controllers/product");

const router = require("express").Router();

router.route("/create").post(createProduct);

module.exports = router;