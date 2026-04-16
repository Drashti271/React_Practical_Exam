import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blog/blogSlice";

const ViewBlog = () => {
  const dispatch = useDispatch();
  const { blogData, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h2 className="mb-4">All Blogs</h2>

          {loading ? (
            <p>Loading...</p>
          ) : blogData && blogData.length > 0 ? (
            blogData.map((blog, index) => (
              <div key={blog.id || blog._id} className="card mb-4 shadow-sm">
                {/* Image */}
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="blog"
                    className="card-img-top"
                    style={{ height: "250px", objectFit : "cover" }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">
                    {index + 1}. {blog.title}
                  </h5>

                  <p className="card-text">{blog.content}</p>
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
