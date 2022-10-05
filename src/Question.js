import React, { useState } from 'react'
import {questions} from './questions'
const Question = ({
  score,
  setScore,
  setQuestion,
  setFinished,
  finished,
}) => {
  let [qusetionsNo,setQuestionsNo]=useState(0)
  let handlerClick =(isCurrect)=>{
    if(qusetionsNo <9){
      if(isCurrect){
        setScore(score += 100)
      }
      setQuestionsNo(  qusetionsNo += 1)
    }else {
      
      
      
      setQuestion(false)
      setQuestionsNo(0)
      setFinished(true)
    }
  }
  console.log(questions[qusetionsNo].answers,'check')
  return (
    <div className="bg-gray-300 w-[400px] rounded-lg flex flex-col justify-between mx-auto my-8 px-4 py-4 h-[400px]" >
        <div >
            <h1 className='text-center text-2xl font-[500] mt-8'>{questions[qusetionsNo].questionText}</h1>
            <div className="flex flex-col mt-8 gap-4 justify-center items-center">
                {questions[qusetionsNo].answers.map((answer,index)=>(
                  
                <div 
                
                key={index}
                onClick={()=>handlerClick(answer.correctAnswer)}
                className='bg-black cursor-pointer text-white px-8 py-1 rounded-lg font-[500]'>{answer.answerText}</div>
                
                ))}
            </div>
        </div>
       <div className="flex justify-between">
       <h5 className='font-[500] text-xl'>Score: {score}</h5>
       <h5 className='font-[500] text-xl'>Question  <span>{qusetionsNo + 1}</span></h5>
       </div>
    </div>
  )
}

export default Question