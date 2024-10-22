import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div>
        <div className='p-3 bg-white mx-3 mb-4 rounded shadow text-lg font-semibold'>{bookmark.title}</div>
    </div>
  )
}

Bookmark.propTypes = {
  bookmark: PropTypes.object
}

export default Bookmark
