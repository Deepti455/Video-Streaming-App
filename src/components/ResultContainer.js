import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_RESULT, YOUTUBE_SEARCH_RESULT1 } from '../utils/constant'
import { Link, useNavigate } from 'react-router-dom'
import ResultContainerShimmer from './ResultContainerShimmer'

const ResultContainer = () => {

    const query = useSelector(store=>store.searchQuery.query)
    const [queryResults, setQueryResults] = useState([])
    const [nextPage, setNextPage] = useState("")
    const navigate = useNavigate()

    const getSearchResults = async(nextPage=undefined)=>{
        if(!nextPage){
        const res = await fetch(YOUTUBE_SEARCH_RESULT(query))
        const json = await res.json();
        setQueryResults([...queryResults,...json.items])
        const pageToken = json.nextPageToken
        console.log(pageToken)
        setNextPage(pageToken)
        }else if(nextPage){
            const res = await fetch(YOUTUBE_SEARCH_RESULT1(nextPage,query))
            const json = await res.json();
            const pageToken = json.nextPageToken
            console.log(pageToken)
            setNextPage(pageToken)
            setQueryResults([...queryResults,...json.items])
        }
        
    }

    console.log(nextPage)

   useEffect(()=>{
    if(!query){
        navigate('/')
    }

    getSearchResults()
    
   },[query]) 


  return !queryResults || queryResults?.length===0 ? (
    <div className='h-screen overflow-y-auto pb-32 pt-10 pl-20'>
        {Array(5).fill("*").map((data,index)=><ResultContainerShimmer key={index}/>)}
    </div>
  ) : (
    <div className='h-screen overflow-y-auto pb-32 pt-10 pl-20'>
        {queryResults?.map((result)=><Results key={result.id.videoId} result={result}/>) }
        <button onClick={()=> getSearchResults(nextPage)} className='m-auto bg-green-700 text-white px-5 py-3 block text-xl font-semibold rounded-2xl'>Show More</button>
    </div>
  )
}


const Results=({result})=>{
    const {id, snippet} = result
    return (
        <div className='flex mb-4'>
            <Link to={'/watch?v='+id.videoId}><img src={snippet?.thumbnails?.medium?.url} alt={"vedio-img"} className='w-[28rem] h-64 rounded-2xl max-w-fit'/></Link>
            <div className='pl-6 pt-5'>
            <p className='text-2xl pb-5'>{snippet?.title}</p>
            <p className='text-sm pb-10'>{snippet.channelTitle} 💥</p>
            <p className='flex flex-wrap'>{snippet?.description}</p>
            </div> 
        </div>
    )

}

export default ResultContainer