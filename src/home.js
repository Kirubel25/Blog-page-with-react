import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs,IsLoading,error} = useFetch("http://localhost:8000/blogs") 

  return (
    <div className="home">
        {error && <div>{error}</div>}
      {IsLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
