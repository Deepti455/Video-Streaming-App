import React from 'react'

const VedioContainerShimmer = () => {
  return (
    <div className='mb-10 mt-7 mx-1 animate-pulse'>
        <div className='w-[27rem] h-64 bg-gray-300 rounded-2xl mb-2 transition-colors'></div>
        <div className='w-96 h-3 bg-gray-300 rounded-3xl ml-11 mb-3'></div>
        <div className='w-96 h-3 bg-gray-300 rounded-3xl ml-11'></div>
    </div>
  )
}

export default VedioContainerShimmer