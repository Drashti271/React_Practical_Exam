import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog, getAllBlog } from "../features/blog/blogSlice";

const ViewBlog = () => {
  const dispatch = useDispatch();
  const { blogData, loading } = useSelector((state) => state.blog);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  const filteredBlogs = blogData?.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };


  return (
    <div className="container mt-4">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">

          <h2 className="mb-4">All Blogs</h2>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Search blogs by title or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {loading ? (
            <p>Loading...</p>
          ) : filteredBlogs && filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <div key={blog.id || blog._id} className="card mb-4 shadow-sm">

                {blog.image && (
                  <img
                    src={blog.image}
                    alt="blog"
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">
                    {index + 1}. {blog.title}
                  </h5>

                  <p className="card-text">{blog.content}</p>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No Blogs Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;