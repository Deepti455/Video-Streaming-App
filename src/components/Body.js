import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {isMobile} from 'react-device-detect';
import { closeMenu } from '../utils/appSlice';


const Body = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    if(isMobile){
      dispatch(closeMenu())
    }
},[isMobile])

  const isSideBarOpen = useSelector(store=> store.app.isSideBarOpen)

  return (
    <div className='grid grid-flow-col fixed w-full'>
        {isSideBarOpen &&
        <div className='overflow-y-auto h-screen scrollbar overflow-x-hidden w-96 sm:w-72 sm:sidebar'>
            <Sidebar/>
        </div>}
        <div className={isSideBarOpen?'col-span-10 ml-0 sm:ml-12':'col-span-10'}>
            <Outlet/>
        </div>
    </div> 
  )
}

export default Body