import React from 'react'
import PropTypes from 'prop-types'
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark,handleTotalSpentTime}) => {
    const {id,date,title,cover,profile_img,profile_name,reading_time,hashtag} = blog;
  return (
    <div className='space-y-5 mb-6'>
        <img className='rounded' src={cover} alt="" />
        <div className='flex justify-between items-center '>
            <div className='flex gap-4 '>
                 <img className='h-14 w-14' src={profile_img} alt="" />
                 <div className='text-left'>
                      <p className='text-2xl font-bold'>{profile_name}</p>
                      <p className='text-lg font-semibold text-gray-400'>{date}</p>
                 </div>
            </div>
            <div className='flex items-center justify-around gap-2'>
                <h3 className='text-gray-400'>{reading_time} min read</h3>
                <span onClick={() => handleAddBookmark(blog)} className='cursor-pointer'><FaRegBookmark/></span>
            </div>
        </div>
        <h2 className='text-left text-4xl font-bold max-w-xl'>{title}</h2>
        <div className='flex gap-4 text-gray-400'>{hashtag.map((hast,index) => <p key={index}>{hast}</p>)}</div>
        <button 
        onClick={() => {handleTotalSpentTime(id,reading_time)}}
        className='underline text-purple-600 flex justify-start text-xl font-semibold'
        >Mark as read</button>
        <hr className='border-b-2' />
    </div>
  )
}

Blog.propTypes = {
   blog: PropTypes.object
}

export default Blog
