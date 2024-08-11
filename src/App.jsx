
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarksBtn=blog=>{

    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const [readingTime, setReadingTime]= useState(0)

  const handleMarksAsReadBtn=(id,time)=>{
      const newReadingTime= readingTime + time
      setReadingTime(newReadingTime)
      // remove bookmark when mark as done click

      const remainingBookmarks= bookmarks.filter(bookmark=>bookmark.id!==id)
      setBookmarks(remainingBookmarks)

  }


  return (
    <>    
     <Header></Header>
     <div className='md:flex '>
     <Blogs 
     handleBookmarksBtn={handleBookmarksBtn}
     handleMarksAsReadBtn={handleMarksAsReadBtn}>
     </Blogs>

     <Bookmarks 
     bookmarks={bookmarks}
     readingTime={readingTime}>

     </Bookmarks>
     </div>
     
     
    </>
  )
}

export default App;
