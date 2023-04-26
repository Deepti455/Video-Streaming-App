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
      {!isSideBarOpen && <div className='w-0 sm:w-32'></div>}
      <div className='flex flex-col w-full p-1 sm:p-4'>
        <div className='flex flex-col sm:flex-row'>
          <div className='mt-1 pr-0 sm:pr-3 m-auto'>
            <iframe 
              className='w-[370px] h-[300px] sm:w-[1200px] sm:h-[600px] '
              // width="1200" 
              // height="600" 
              src={"https://www.youtube.com/embed/"+serachParams.get('v')} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
          </div>
          <div className='w-full mt-10 sm:mt-auto'>
            <LiveChat/>
          </div>
        </div>
          <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchImage