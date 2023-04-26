import React,{useEffect, useState}  from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard'
import {Link} from 'react-router-dom'
import VedioContainerShimmer from './VedioContainerShimmer'

const VedioContainer = () => {

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos()
        // eslint-disable-next-line
    },[])

    const getVideos=async()=>{
        const res = await fetch(YOUTUBE_API)
        const json = await res.json()
        setVideos(json?.items)
    }


  return !videos || videos?.length===0 ? (
        <div className='mx-0 my-0 sm:mx-16 sm:my-4 flex flex-wrap'>
            {Array(15).fill("*").map((data, index)=><VedioContainerShimmer key={index}/>)}
        </div>) : (
        <div className='mx-0 my-6 sm:mx-16 sm:my-4 flex flex-wrap'>  
            {videos?.map(item=><Link to={'watch?v='+item.id} key={item?.id}><VideoCard item={item}/></Link>)}    
        </div>
  )
}

export default VedioContainer