import React from 'react'
import ButtonList from './ButtonList'
import VedioContainer from './VedioContainer'

const MainContainer = () => {

  return (
    <div className='overflow-y-auto h-screen scrollbar'>
    <ButtonList/>
    <VedioContainer/>
    </div>
  )
}

export default MainContainer