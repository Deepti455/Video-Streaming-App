import React from 'react'

const VideoCard = ({item}) => {

  const {snippet, statistics } = item
   
  return (
    <div className='p-2 w-[27rem] rounded-lg m-1'>
      <img src={snippet.thumbnails.medium.url} alt="video" className='w-[27rem] rounded-2xl'/>
      <h3 className='text-lg font-bold'>{snippet.title}</h3>
      <p className='pt-2'>{snippet.channelTitle}</p>
      <p className='pt-4'>{statistics.viewCount} views</p>
    </div>
  )
}

export default VideoCard