import Navbar from "./navbar";
import Home from "./home";
import Products from "./products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./createBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import EditBlog from "./EditBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<EditBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
