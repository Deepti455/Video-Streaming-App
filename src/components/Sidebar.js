import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sideBarList } from '../utils/constant'
import {Link} from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import { isMobile } from 'react-device-detect'



const Sidebar = () => {
   const dispatch = useDispatch()
    const isSideBarOpen = useSelector(store=>store.app.isSideBarOpen)

    if(!isSideBarOpen) return null;

  return (
    <div className='pl-5 pt-5 w-96 sm:w-72 mb-20'>
        {sideBarList.map((data, index)=>{
           const heading =  data.title.trim() && <h1 className='text-2xl font-semibold px-5 mb-4'>{data.title}</h1>
           return (
            <div className='border-b py-4' key={`div${index}`}>
                {heading && heading}
                <ul className='text-lg'>
                    {data.links.map((link, index)=><Link to='/' onClick={()=>isMobile && dispatch(closeMenu())} key={index}><li className='py-2 w-80 sm:w-56 hover:bg-gray-200 text-lg px-5 rounded-lg cursor-pointer'>{link}</li></Link>)}
                </ul>
            </div>
           )
        })}
    </div>
  )
}

export default Sidebar