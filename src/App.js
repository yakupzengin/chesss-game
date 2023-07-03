import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Board from './Board';
import subjectGame, { initGame } from './Game';
import { useEffect, useState } from 'react';

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState([]);
  const [result, setResult] = useState([]);

  useEffect( () => {
    initGame()
    const  subscribe  = subjectGame.subscribe( sub => {
      setBoard(sub.chess)
      setIsGameOver(sub.isGameOver)
      setResult(sub.result)
      })

    return () => subscribe.unsubscribe();
  },[])
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-black h-screen flex items-center justify-center relative'>
        {
          isGameOver && <div className='font-bold  absolute bg-white bg-opacity-80 rounded-lg p-3  '>
            <h1 className='flex items-center justify-center'>Game is Over</h1>
            {result && <div>{result}</div> }
          </div>
        }
        <Board board={board } />
      </div>

    </DndProvider>
  );
}

export default App;