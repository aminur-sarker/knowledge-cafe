import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarksBtn }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1>Blogs page</h1>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        handleBookmarksBtn={handleBookmarksBtn}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes={
    handleBookmarksBtn:PropTypes.func
}

export default Blogs;