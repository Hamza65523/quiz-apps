import { useState } from 'react';
import './App.css';
import Finished from './Finished';
import Question from './Question';
import Start from './Start';

function App() {
  const [start,setStart]=useState(true)
  const [question,setQuestion]=useState(false)
  const [finished,setFinished]=useState(false)
  const [name,setName]=useState()
  const [score,setScore]=useState(0)
  const [topScore,setTopScore]=useState(0)
  const [oldScore,setOldScore]=useState(0)

  return (
    <div className="App">
      {start&&<Start setName={setName} name={name} setQuestion={setQuestion} setStart={setStart} score={score} topScore={topScore}/>}
      {question&&<Question  setScore={setScore} score={score} finished={finished} setFinished={setFinished} setQuestion={setQuestion}/>}
      {finished&&<Finished setTopScore={setTopScore} oldScore={oldScore} setOldScore={setOldScore}  setScore={setScore} setFinished={setFinished} topScore={topScore} score={score} setStart={setStart}/>}
    </div>
  );
}

export default App;
