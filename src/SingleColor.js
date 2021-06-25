import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, hexColor,index}) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(()=>{
    const timeout = setTimeout(()=>{
          setAlert(false)
    },2000)
    return ()=> clearTimeout(timeout)
  },[alert])
  return (
   <article 
   style={{backgroundColor:`rgb(${bcg})`}}
   className = {index > 10 ?'color-light' : ''}
   onClick={()=>{
     navigator.clipboard.writeText(hexValue)
     setAlert(true)
   }}
   >
  
     <p className='percent-value'>{weight}%</p>
     <p className='color-value'>{hexValue}</p>
     {alert ? <p className='alert'>copied to clipboard</p>: ''}
   </article>
  )
}

export default SingleColor
