import React from 'react'

const ResultContainerShimmer = () => {
  return (
    <div className='flex animate-pulse'>
        <div className='w-[27rem] h-64 bg-gray-300 rounded-2xl mb-2'></div>
        <div className='mt-6'>
             <p className='w-[50rem] h-3 bg-gray-300 rounded-3xl ml-11 mb-3'></p>
             <p className='w-1/2 h-3 bg-gray-300 rounded-3xl ml-11'></p>
        </div>
    </div>
  )
}

export default ResultContainerShimmer