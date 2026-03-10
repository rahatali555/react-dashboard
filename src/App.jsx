
function MyButton(){
  return(
    <button> Hi there!</button>
  )
}
function MyName(){
  return(
    <>
    <h1> My Name </h1>
    <p> i am software engineer </p>
    <MyButton />
    <img  src="/images/download.png" alt="react pic" width='200' height='200'/>
    
    </>
  )
}
function App(){
  const User= {
    name:"rahi",
    age:32,
    Addres:"Lahore"
  }
  return(
    <>
    <h1>{User.name} {User.age} {User.Address}</h1>
  
    <MyName/>

    </>
  )
}
export default App;