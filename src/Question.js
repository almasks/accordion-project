import React, { useState } from 'react';
import {AiOutlineMinusSquare,AiOutlinePlusSquare} from 'react-icons/ai'

function Question({title,info}) {
    const [showIcon,setShowIcon] =useState(false)
  return (
    <article className='question'>
      <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShowIcon(!showIcon)}>
                {showIcon?<AiOutlineMinusSquare/>:<AiOutlinePlusSquare/>}
            </button>
      </header>
      {showIcon && <p>{info}</p>}

        
    </article>
  )
}

export default Question
