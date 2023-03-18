import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {IsLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
