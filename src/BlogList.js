const BlogList = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-priview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>writen by {blog.author}</p>
                    <button >Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
