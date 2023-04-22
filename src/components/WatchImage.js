import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchImage = () => {
  const [serachParams] = useSearchParams();
  const isSideBarOpen = useSelector(store=>store.app.isSideBarOpen)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
    // eslint-disable-next-line
  },[])
  return (
    <div className='flex h-screen overflow-y-auto scrollbar'>
      {!isSideBarOpen && <div className=' w-32'></div>}
      <div className='flex flex-col w-full p-4'>
        <div className='flex'>
        <div className='mt-1 pr-3'>
          <iframe 
            width="1200" 
            height="600" 
            src={"https://www.youtube.com/embed/"+serachParams.get('v')} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='w-full'>
          <LiveChat/>
        </div>
        </div>
          <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchImage