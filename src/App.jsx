import{ useState } from 'react'
function MyButton(){
  const[count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);

  }
  return(
    <button onClick={handleClick}>
      clicked {count} times
    </button>
  )
}
export default function App(){
  return(
    <>
    <h1> counter that updates</h1>
    <MyButton/>
    <MyButton/> 
      </> );
      }