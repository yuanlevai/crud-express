const { get, getById, create, update, remove } = require("../controllers/ProductController");
const router = require("express").Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);


module.exports = router;