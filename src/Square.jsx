import React from 'react'
import { useDrop } from 'react-dnd'
import { move } from './Game'
const Square = ({children,colorValue,positionCntrl}) => {
  
  const [,drop] = useDrop( {
    accept : "chess",
    drop : (item) => {
      const [fromPosition] = item.id.split("_")
      move(fromPosition,positionCntrl)
    }

  })
  return (
    <div ref={drop} className={`${colorValue ? " bg-orange-800"  : "bg-white"} w-[80px] h-[80px] flex items-center justify-center cursor-grab `}>{children}</div>
  )
}

export default Square