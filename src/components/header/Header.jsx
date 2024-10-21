import React from 'react'
import PropTypes from 'prop-types'
import profile from '../../assets/profile.png'

const Header = props => {
  return (
    <div className='max-w-6xl mx-auto flex justify-between items-center border-b-2 mb-8 pb-4'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
        <img className='h-15 w-15 ' src={profile} alt="" />
    </div>
  )
}

Header.propTypes = {

}

export default Header
