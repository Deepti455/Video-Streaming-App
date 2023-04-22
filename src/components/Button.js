import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-gray-200 px-3 py-2 rounded-lg text-lg mx-2'>{name}</button>
  )
}

export default Button