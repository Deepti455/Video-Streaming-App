import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generaterandomMessage, generateRandomName } from '../utils/helper'
import ChatMessage from './ChatMessage'

const LiveChat = () => {

    const dispatch = useDispatch()
    const messages = useSelector(store=>store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("")

    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: generaterandomMessage() + "🚀"
            }))
        },2000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

  return (
    <>
    <div className='text-lg p-3 border border-black h-[600px] w-full bg-slate-100 rounded-xl overflow-y-auto scrollbar flex flex-col-reverse'>
        {messages.map((msg, index)=>
            <ChatMessage key={index} name={msg.name} message={msg.message}/>)
        }
        
    </div>
    <form className='w-full border border-black h-10 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' className='w-4/5 h-9 rounded-lg px-4' placeholder='Say something... 😊' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
        <button 
            className='mx-3 bg-green-100 px-5 py-1 rounded-lg' 
            onClick={()=>{
                dispatch(addMessage({
                name: "Deepti Verma",
                message: liveMessage}));
                setLiveMessage("")
                }}>Send</button>
    </form>
    </>
  )
}

export default LiveChat