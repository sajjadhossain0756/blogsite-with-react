
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [spentTime,setSpentTime] = useState(0);

  const handleAddBookmark = (blog) =>{
      const newBookmark = [...bookmarks,blog];
      setBookmarks(newBookmark);
  }

  const handleTotalSpentTime = (id,time) =>{
    const totalSpentTime = spentTime + time;
    setSpentTime(totalSpentTime);
    // remove bookmark after reading
    const filteredBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(filteredBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-6 max-w-6xl mx-auto'>
          <Blogs 
          handleAddBookmark = {handleAddBookmark}
          handleTotalSpentTime = {handleTotalSpentTime}
          ></Blogs>
          <Bookmarks 
          bookmarks = {bookmarks}
          spentTime = {spentTime}
          ></Bookmarks>
      </div>
    </>
  )
}

export default App
