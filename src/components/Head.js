import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleOpen } from '../utils/appSlice'
import {Link, useNavigate} from 'react-router-dom'
import { YOUTUBE_SEARCH_API, proxyUrl } from '../utils/constant'
import { cacheSearchResults } from '../utils/searchSlice'
import { addSearchQuery } from '../utils/searchQuerySlice'
import Logo from '../utils/images/logo.png'
import LogoMobile from '../utils/images/logo_1.png'
import HamburgerIcon from '../utils/images/hamburger.png'
import Avatar from '../utils/images/avatar.png'
import { isMobile } from 'react-device-detect'

const Head = () => {
    const dispatch = useDispatch()
    const isSideBarOpen = useSelector(store=>store.app.isSideBarOpen)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchSuggestions, setSearchSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const searchCache = useSelector(store=>store.search)
    const navigate = useNavigate();
    // const [searchClick, setSearchClick] = useState(false);

    useEffect(()=>{
        //make the api call on every keypress
        // if the difference between 2 api calls is less than 200ms
        // decline the api call
        if(searchQuery.trim()){
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery.trim()]){
                setSearchSuggestions(searchCache[searchQuery.trim()]);
            }else if(searchQuery.trim()){
                getSearchSuggestions();
            }
        } ,200);

        return ()=>{
            clearInterval(timer)
        }}

        // if before 200 ms keypresses
        //it will again run useeffect and cleanup function will clean the previous timer 
        // because componen is demounted and mounted again 
        // reconciliation happens
        // new timer is setup

        // eslint-disable-next-line
    },[searchQuery])

    const getSearchSuggestions = async()=>{
        const res = await fetch(proxyUrl + YOUTUBE_SEARCH_API+searchQuery);
        const json = await res.json();
        setSearchSuggestions(json[1])
        dispatch(cacheSearchResults({
            [searchQuery]: json[1]
        }))
    }

    const handleOpneSideBar=()=>{
        if(!isSideBarOpen){
            dispatch(toggleOpen())
        }
    }

    const handleSideBarToggle = ()=>{
        dispatch(toggleOpen())
    }


  return (
    <div className='grid grid-flow-col shadow-lg p-2 pl-2 sm:pl-10'>
        <div className='flex col-span-1 items-center'>
            <img 
            onClick={()=>handleSideBarToggle()}
            className='h-9 cursor-pointer mr-3'
            src={HamburgerIcon}
            alt='hamburger'/>
            <Link to='/'>
            <img 
            onClick={()=>handleOpneSideBar()}
            className='h-10'
            src={Logo}
            alt='youtube' />
            </Link>
        </div>
        <div className='col-span-10 items-center flex justify-center m-2 sm:m-0'>
            <input 
                className='w-full sm:w-1/2 border border-gray-600 h-10 rounded-l-3xl p-4 text-lg font-semibold'
                placeholder='Search'
                type='text'
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                />
            <button 
               onClick={()=>{dispatch(addSearchQuery(searchQuery)); navigate("/results?search-query="+searchQuery.split(" ").join("+")) }}
                className='bg-gray-100 py-2 px-4 border border-gray-600 rounded-r-3xl'>
                &#128269;
            </button>
            {showSuggestions && <div className='fixed left-[-0.1px] sm:left-0 top-12 sm:top-16 z-10 bg-white w-full sm:w-[48rem]  mt-2 rounded-xl shadow-lg border-gray-400'>
                <ul onBlur={()=>setShowSuggestions(false)}>
                    {searchSuggestions.map((suggestion, index)=>
                        <Link key={index} to={'/results?search-query='+suggestion.split(" ").join("+")}><li className='text-lg font-semibold py-2 hover:bg-gray-200 px-6 cursor-pointer' onClick={()=>{dispatch(addSearchQuery(suggestion)); setSearchQuery(suggestion); setShowSuggestions(false)}}>
                            <span className='pr-4'>🔍</span>
                            {suggestion}
                        </li></Link>
                    ) }
                </ul>
            </div>}
        </div>
        <div className='col-span-1 flex items-center w-9 sm:w-auto'>
            <img
            className='h-9'
            src={Avatar}
            alt='avatar'/>
        </div>  
    </div>
  )
}

export default Head