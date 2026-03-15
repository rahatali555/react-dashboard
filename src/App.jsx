import { useState } from "react";

function MyButton(){
  const[count, setCount]=useState(0);
   
  function handleClick(){
    setCount(count+1)
  }
  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}
export default function App(){
  return (
    <div>
      <h1> counters that update separetly</h1>
      <MyButton/>
 
       <MyButton/> </div>
  )
}