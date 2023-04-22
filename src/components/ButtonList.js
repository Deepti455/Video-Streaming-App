import React from 'react'
import Button from './Button'
import { buttons } from '../utils/constant'



const ButtonList = () => {
  return (
    <div className='my-6 mx-8'>
        {buttons.map((button,index)=><Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList