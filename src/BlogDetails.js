import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    IsLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "Delete",
    }).then(() => {
      console.log("blog deleted");
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {IsLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
          <div>{blog.body}</div>
          <div className="detail-b">
            <Link to={`/edit/${id}`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
          
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
