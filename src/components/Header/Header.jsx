import headerImage from '../../assets/image/passport image.png'

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-400 px-4'>
             <h1 className='text-center text-5xl font-semibold pt-5 pb-5'>React Knowledge Cafe</h1>
             <img className='w-32 h-32 rounded-full' src={headerImage}></img>
        </div>
    );
};

export default Header;