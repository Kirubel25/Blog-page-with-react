import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function EditBlog() {
  const { id } = useParams();
  const {
    data: blog,
    IsLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const [IsPending, setIsPending] = useState(false);

 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setTitle(blog?.title);
    setBody(blog?.body);
    setAuthor(blog?.author);
  }, [blog]);

  const handleEdit = () => {
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/" + id,{
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("new blog added");
        setIsPending(false);
        navigate('/')
      });
  }
  return (
    <div className="edit-blog">
      <h2>Edit Blog</h2>
      <form>
        <label>Title</label>
        {
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        }
        <label>Body</label>
        <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.author)}>
          <option value="Kirubel">Kirubel</option>
          <option value="Mulualem">Mulualem</option>
        </select>
        {!IsPending && <button onClick={handleEdit}>Edit</button>}
        {IsPending && <button>Updating</button>}
      </form>
    </div>
  );
}

export default EditBlog;
