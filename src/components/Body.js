import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       onClickOutside && onClickOutside();
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside, true);
  //   };
  // }, [ onClickOutside ]);

  const isSideBarOpen = useSelector(store=> store.app.isSideBarOpen)

  return (
    <div className='grid grid-flow-col fixed w-full'>
        {isSideBarOpen &&
        <div className='overflow-y-auto h-screen scrollbar overflow-x-hidden w-72 sidebar'>
            <Sidebar/>
        </div>}
        <div className={isSideBarOpen?'col-span-10 ml-12':'col-span-10'}>
            <Outlet/>
        </div>
    </div> 
  )
}

export default Body