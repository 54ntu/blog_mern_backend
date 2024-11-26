const express = require("express");
const blogrouter = express.Router();
const {
  addblog,
  getBlog,
  deleteBlog,
  updateblog,
  getBlogById,
} = require("../controllers/blog.controllers");
const { upload } = require("../middlewares/multer.middlewares");

blogrouter.route("/addblog").post(upload.single("image"), addblog);
blogrouter.route("/getblog").get(getBlog);
blogrouter.route("/deleteblog/:id").delete(deleteBlog);
blogrouter.route("/update/:id").patch(upload.single("image"), updateblog);
blogrouter.route("/blog/:id").get(getBlogById);

module.exports = {
  blogrouter,
};
