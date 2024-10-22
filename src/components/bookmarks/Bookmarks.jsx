import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({bookmarks,spentTime}) => {
  return (
    <div className='w-1/3 '>
        <div className='border-2 mb-4 py-4 rounded-md bg-purple-100'>
            <h2 className='text-2xl font-bold text-purple-600'>Spent time on read: {spentTime} min </h2>
        </div>
       <div className='bg-gray-400 rounded py-4'>
          <h2 className='text-2xl font-bold py-6'>Bookmarked Blogs: {bookmarks.length}</h2>
          {bookmarks.map((bookmark,index)=> <Bookmark key={index} bookmark={bookmark}></Bookmark>)}
       </div>
    </div>
  )
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks
