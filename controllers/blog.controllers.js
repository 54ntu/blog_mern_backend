const { isValidObjectId } = require("mongoose");
const { Blog } = require("../models/blog.models");

const addblog = async (req, res) => {
  const { title, description } = req.body;
  //console.log(title);
  //   http:localhost:4000/public/temp/filename
  const imagePath = req.file?.filename;

  try {
    const response = await Blog.create({
      title,
      description,
      image: imagePath,
    });
    //   console.log(response);
    if (!response) {
      console.log("an error occurred while adding blog...!!!!");
    }

    return res
      .status(200)
      .json(200, { message: "blog added successfully", data: response });
  } catch (error) {
    return res.status(400).json(400, { message: "error occurred..!" });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogdata = await Blog.find();
    //   console.log(blogdata);

    if (blogdata.length < 0) {
      return res.status(404).json(404, { message: "blog data not found" });
    }

    for (let img of blogdata) {
      img.image = "http://localhost:4000/temp/" + img.image;
    }

    return res
      .status(200)
      .json(200, { message: "data fetched successfully.!", data: blogdata });
  } catch (error) {
    return res
      .status(500)
      .json(500, { message: "something went wrong", error });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    if (!isValidObjectId(id)) {
      return res.status(400).json(400, { message: "id is not valid" });
    }

    const response = await Blog.findByIdAndDelete(id);
    if (!response) {
      return res.status(200).json({ message: "data deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json(500, { message: "error deleting data" });
  }
};

const updateblog = async (req, res) => {
  const { title, description } = req.body;
  const imagename = req.file?.filename;
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "invalid object id" });
  }

  const updateddata = await Blog.findByIdAndUpdate(id, {
    title,
    description,
    image: imagename,
  });

  if (updateddata) {
    return res.status(200).json(200, {
      message: "data updated successfully..!!",
      data: updateddata,
    });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId) {
    return res.status(400).json({ message: "invalid object id " });
  }

  const getdata = await Blog.findById(id);
  if (!getdata) {
    return res.status(404).json({ message: "blog not found" });
  }

  return res
    .status(200)
    .json({ message: "blog fetched successfully", data: getdata });
};

module.exports = {
  addblog,
  getBlog,
  deleteBlog,
  updateblog,
  getBlogById,
};
