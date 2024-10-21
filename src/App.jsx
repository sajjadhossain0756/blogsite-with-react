
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex gap-6 max-w-6xl mx-auto'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
