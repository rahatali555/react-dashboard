function MyButton(){
  function handleClick(){
    alert('you clicked it')

  }
  return(
    <button onClick={handleClick}>Clickme</button>
  );
}