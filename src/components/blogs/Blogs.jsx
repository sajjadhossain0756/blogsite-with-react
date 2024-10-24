import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Blog from '../blog/Blog';

const Blogs = ({handleAddBookmark,handleTotalSpentTime}) => {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  },[])

  return (
    <div className='w-2/3'>
        {blogs.map(blog => 
            
            <Blog
            key = {blog.id}
            blog = {blog}
            handleAddBookmark = {handleAddBookmark}
            handleTotalSpentTime = {handleTotalSpentTime}
            ></Blog>
            
        )}
    </div>
  )
}

Blogs.propTypes = {

}

export default Blogs
