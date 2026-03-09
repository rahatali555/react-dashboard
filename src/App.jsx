

function MyButton(){
  return(
    <button>Hi There!</button>
  );
}
function App(){
  const user=
  {
    name:"rahi",
    age:22,
    adDress:"lahore",
   
  }
  return(
    <>
    <h1>{user.name}({user.age})({user.adDress})
      </h1>
      <MyButton/>
    </>
  )
}
export default App;