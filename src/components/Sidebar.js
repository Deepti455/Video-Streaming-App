import React from 'react'
import { useSelector } from 'react-redux'
import { sideBarList } from '../utils/constant'
import {Link} from 'react-router-dom'



const Sidebar = () => {
    const isSideBarOpen = useSelector(store=>store.app.isSideBarOpen)

    if(!isSideBarOpen) return null;

  return (
    <div className='pl-5 pt-5 w-72 mb-20'>
        {sideBarList.map((data, index)=>{
           const heading =  data.title.trim() && <h1 className='text-2xl font-semibold px-5 mb-4'>{data.title}</h1>
           return (
            <div className='border-b py-4' key={`div${index}`}>
                {heading && heading}
                <ul className='text-lg'>
                    {data.links.map((link, index)=><Link to='/'  key={index}><li className='py-2 w-56 hover:bg-gray-200 text-lg px-5 rounded-lg cursor-pointer' onClick={()=>console.log("hlwwwww")}>{link}</li></Link>)}
                </ul>
            </div>
           )
        })}
    </div>
  )
}

export default Sidebar