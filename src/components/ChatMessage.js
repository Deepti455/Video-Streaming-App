import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
          className='w-8 h-8 rounded-full mr-3'
          src='https://yt4.ggpht.com/ytc/AGIKgqOYJAJUb-fM_mztFmT6RXZkNdIhCvUlxZ-VOzeocj_TdkqwWAB36gpwZzNOn3r3=s32-c-k-c0x00ffffff-no-rj'
          alt='user-img'
          />
          <span className='font-bold pr-2'>{name}</span>
          <span>{message}</span>
    </div>
  )
}

export default ChatMessage