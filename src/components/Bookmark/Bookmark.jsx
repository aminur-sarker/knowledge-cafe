import PropTypes from 'prop-types'
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <div>
            <p>{title }</p>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;