function MyButton(){
  return(
    <button>Am Button</button>
  );
}
function App(){
   const user={name:"rahat"};
  return(
    <>
    <h1>{user.name}</h1>
    <MyButton/>
    </>
   
    
   
  );
}
export default App;