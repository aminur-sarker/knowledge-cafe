
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarksBtn=(blog)=>{
    console.log('Bookmarked added')
    console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  return (
    <>    
     <Header></Header>
     <div className='md:flex '>
     <Blogs handleBookmarksBtn={handleBookmarksBtn}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
     
     
    </>
  )
}

export default App
