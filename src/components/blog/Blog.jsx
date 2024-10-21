import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({blog}) => {
    const {id,title,cover,profile_img,profile_name,reading_time} = blog;
  return (
    <div className='space-y-4'>
        <img className='rounded' src={cover} alt="" />
        <div className='flex justify-between items-center '>
            <div>
                 <img className='h-14 w-14' src={profile_img} alt="" />
            </div>
            <div>
                <h3>{reading_time} min read</h3>
            </div>
        </div>
        <h2 className='text-left text-4xl font-bold pb-4'>{title}</h2>
    </div>
  )
}

Blog.propTypes = {

}

export default Blog
