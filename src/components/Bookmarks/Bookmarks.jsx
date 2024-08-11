
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl bg-amber-600 mt-4 mx-2 py-5 font-bold rounded-xl">Spend time on read: {readingTime}</h1>
            <div className=' bg-slate-300 ml-3 mt-4 rounded'>
                <div>
                    <p className="text-3xl font-bold pt-3">Bookmarked: {bookmarks.length} </p>
                </div>
                <div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;