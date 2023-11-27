const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getSingleBootcamp,
  postBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/bootcamp");

router.route("/").get(getBootcamps).post(postBootcamp);
router
  .route("/:id")
  .get(getSingleBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
