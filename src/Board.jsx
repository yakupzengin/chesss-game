import React from 'react'
import SquareBoard from './SquareBoard'
import Square from './Square'

const Board = ( {board} ) => {

    const colorCntrl = (i) => {
        const xCoord = i % 8;
        const yCoord = Math.abs(Math.floor( i / 8 ) - 7 );;
        return (xCoord+yCoord) % 2 === 0;
    }

    const positionCntrl = (i) => {
        const xCoord = i % 8;
        // x==1 ? => x = a
        const yCoord = Math.abs(Math.floor( i / 8 ) - 7 );
        const letters = ["a", "b" , "c", "d" , "e" , "f" , "g", "h"][xCoord]
        return `${letters}${yCoord+1}`
        // a8 , b2
    }
    return (        
    <div className='w-[640px] h-[640px] bg-green-700 flex flex-wrap'>
        {
            // For example flattening an array such as [[1, 2], [3, 4]] yields a string like [1, 2, 3, 4]
            board.flat().map( (brd,i) =>  (
                <Square key={i} colorValue= {colorCntrl(i)} positionCntrl={positionCntrl(i)}>
                    { brd && <SquareBoard brd={brd} positionCntrl={positionCntrl(i)} /> }
                </Square>
            )  )
        }
    </div>
  )
}

export default Board