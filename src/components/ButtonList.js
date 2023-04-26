import React from 'react'
import Button from './Button'
import { buttons } from '../utils/constant'



const ButtonList = () => {
  return (
    <div className='sm:my-6 sm:mx-8 w-full hidden sm:visible'>
        {buttons.map((button,index)=><Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList