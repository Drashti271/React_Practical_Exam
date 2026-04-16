import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, getAllBlog } from "../features/blog/blogSlice";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    image: "",
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog(blog))

    setBlog({ image: "", title: "", content: "" });
  };

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h3 className="mb-3">Add Blog</h3>

          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                className="form-control"
                value={blog.image}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={blog.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Content</label>
              <textarea
                name="content"
                className="form-control"
                value={blog.content}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary w-100">Add Blog</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
