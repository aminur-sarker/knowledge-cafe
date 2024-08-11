import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarksBtn, handleMarksAsReadBtn }) => {
    const {id, cover_img, author_name, author_img, reading_time, title, hashtags, posted_date } = blog
    return (
        <div className='border-4 border-blue-950 mb-10'>
            <div className='w-full '>
                <img className='rounded-b-3xl' src={cover_img} alt="" />
            </div>

            {/* Author image , name and posted date */}

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div className='mr-5'>
                        <p>{author_name}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex mr-1'>
                    <p className='mt-2'>{reading_time} hour read</p>
                    <button
                    onClick={()=>handleBookmarksBtn(blog)}
                    className='ml-4 text-blue-800'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>

            <div className='text-2xl'>
                <h2 className='text-3xl'>{title}</h2>
            </div>

            <a href=''>{hashtags}</a> <br />
            <button className='underline text-violet-800 text-lg font-bold' onClick={()=>handleMarksAsReadBtn(id,reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarksBtn:PropTypes.func,
    handleMarksAsReadBtn:PropTypes.func
}
export default Blog;