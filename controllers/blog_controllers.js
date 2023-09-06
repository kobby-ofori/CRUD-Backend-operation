const blogModel = require("../schemas/blog_schema");

// post request
// create new blog
const createBlog = async (req, res) => {
  const { title, description, content } = req.body;

  try {
    // creating a new document (a new blog post)
    const newBlog = new blogModel({ title, description, content });
    await newBlog.save();
    res.send({ message: "Successfull", data: newBlog });
  } catch (error) {
    console.log(error);
    res.send({ message: "Unsuccessfull" });
  }
};

// get request
// gets all blogs created
const getAllBlogs = async (req, res) => {
  try {
    const allPosts = await blogModel.find();

    res.send({ message: "Successfull", data: allPosts });
  } catch (error) {
    console.log(error);
    res.send({ message: "Unsuccessfull" });
  }
};

// put request
// gets blog by id and updates it
const updateBlog = async (req, res) => {
  const {id} = req.params;

  try {
    // updating an existing document 
    const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body);
    
    res.send({ message: "Successfull", data: updatedBlog });
  } catch (error) {
    console.log(error);
    res.send({ message: "Unsuccessfull" });
  }
};

// delete request
// delets blog by id 
const deleteBlog = async (req, res) => {
  const {id} = req.params;

  try {
    // deleting a blog post
    const deletedPost = await blogModel.findByIdAndDelete(id);
    
    res.send({ message: "Successfull", data: deletedPost });
  } catch (error) {
    console.log(error);
    res.send({ message: "Unsuccessfull" });
  }
};

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
