const router = require("express").Router();
const c = require("../controllers/articleController");

router.post("/", c.create);
router.get("/", c.list);
router.get("/:slug", c.get);
router.put("/:slug", c.update);
router.delete("/:slug", c.remove);

module.exports = router;
