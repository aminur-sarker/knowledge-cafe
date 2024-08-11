
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h1 className='text-3xl'>Bookmarks: {bookmarks.length}</h1>
            <h1 className="text-3xl">Spend time on read:</h1>
            <div>
                <p className="text-3xl">Bookmarked: </p>
            </div>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object
}

export default Bookmarks;