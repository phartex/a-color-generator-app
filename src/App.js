import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
 const [list, setList] = useState([])
 const [error, setError] = useState(false)
 const [color, setColor] = useState('')

 const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      let colors = new Values (color).all(10)
      setList(colors)
    }catch(error){
      setError(true)
    }
 }

  return(
    <>
    <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
          placeholder='#f15025'
          type='text'
          value={color}
          className = {`${error ? 'error' : null}`}
          onChange={(e)=> setColor(e.target.value)}
          />
          <button type='submit' className='btn'>generate</button>
          
        </form>
    </section>
    <section className='colors'>
        {list.map((item,index)=>{
          const hexColor = item.hex
          return(
            <SingleColor key={index} {...item} hexColor={hexColor} index={index}/>
          )
        })

        }
    </section>
    </> 
  )
 
}

export default App

// const [color, setColor] = useState('')
// const [error, setError] = useState(false)
// const [list, setList] = useState([])
// const handleSubmit = (e)=>{
//     e.preventDefault();
//     try {
//       let colors = new Values (color).all(10)
//       setList(colors)
      
//     } catch (error) {
//       setError(true)
//       console.log(error)
//     }
    
  
// }
// return <>
// <section className='container'>
//   <h3>Color generator</h3>
//   <form onSubmit={handleSubmit}>
//     <input type='text'
//       placeholder='#f15025'
//       valuev = {color} 
//       onChange={(e)=> setColor(e.target.value)}
//       className={`${error ? 'error': null}`}
//     />
//     <button type='submit' className='btn'>generate</button>
//   </form>
  
// </section>
// <section className='colors'>
//   {list.map((color,index)=>{
//      const{hex} = color
//     return(
//       <SingleColor key={index} {...color} index={index} hexColor={hex}/>
//     )
//   })}
// </section>
// </>