import PropTypes from 'prop-types'
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-lg'>
            <p className='text-2xl'><li>{title }</li></p>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;