const { get, getById, create, update, removed } = require("../controllers/ProductController");
const router = require("express").Router();

router.get("/", get);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", removed);


module.exports = router;