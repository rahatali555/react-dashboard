function MyButton(){
  return (
    <button className="my-button">
      Hey its me click me!
    </button>
  );
}
function App(){
  const User={
    name:"Johr"
  };
  return(
    <>
    <h1>{User.name}</h1>
    <MyButton/>
    </>
  );
}
export default App;