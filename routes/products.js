const router = require("express").Router();
const productsController = require("../controllers/productsController");


router.post("/");
router.get("/", productsController.product_all);
router.get('/:productId', productsController.product_details);
router.put("/:productId");
router.delete("/:productId");

module.exports = router;