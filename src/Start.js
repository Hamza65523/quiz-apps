import React from 'react'

const Start = ({
  setName, setStart, score, topScore,setQuestion,name
  
}) => {
  const startgame=()=>{
    if(name.length <3){
      setQuestion(false)
      setStart(true)
    }else{
      setQuestion(true)
      setStart(false)
    }
  }
  console.log(score,'soce')
  return (
    <div className="bg-gray-300 w-[400px] rounded-lg flex flex-col justify-between mx-auto my-8 px-4 py-4 h-[400px]" >
        <div >
            <h1 className='text-center text-2xl font-[500] mt-8'>Welcome to Quize Game!</h1>
            <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className='text-center font-[500]'>Please enter your name.</h2>
                <input type="text" onChange={(e)=>setName(e.target.value)} className='px-2 py-1 border-2 border-black rounded-2xl'  placeholder='Enter your name' name="" id="" />
                <div onClick={startgame} className='bg-black cursor-pointer text-white px-4 py-1 rounded-2xl font-[500] '>Lets's Play</div>
            </div>
        </div>
    </div>
  )
}

export default Start