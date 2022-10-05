import React from 'react'

const Finished = ({
  setScore, topScore, score, setStart,setFinished,setOldScore,oldScore,setTopScore
}) => {
  const handlerCick=()=>{
    if(oldScore <score){
      setTopScore(score)
      console.log(score,'corese')
    }
    setOldScore(score)
    setStart(true)
    setScore(0)
    setFinished(false)
  }
  
  return (
    <div className="bg-gray-300 w-[400px] rounded-lg flex flex-col justify-between mx-auto my-8 px-4 py-4 h-[400px]" >
        <div >
            <h1 className='text-center text-xl font-[500] mt-8'>You reached the end of the game, Frontend Zone</h1>
          
            <div className="flex flex-col mt-8 gap-4 justify-center items-center">
                <h2 className='text-center font-[500]'>{'TopScore'}</h2>
                <h2 className='text-center font-[500]'>{topScore}</h2>
                <h2 className='text-center font-[500]'>Score</h2>
                <h2 className='text-center font-[500]'>{score}</h2>
                <div onClick={()=>handlerCick()} className='bg-black cursor-pointer text-white px-4 py-1 rounded-2xl font-[500]'>Lets's Play</div>
            </div>
        </div>
    </div>
  )
}

export default Finished