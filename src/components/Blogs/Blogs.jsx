import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmarksBtn , handleMarksAsReadBtn}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 mt-4">
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        handleBookmarksBtn={handleBookmarksBtn}
                        handleMarksAsReadBtn={handleMarksAsReadBtn}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes={
    handleBookmarksBtn:PropTypes.func,
    handleMarksAsReadBtn:PropTypes.func
}

export default Blogs;