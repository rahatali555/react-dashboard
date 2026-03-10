function MyButton(){
  return(
    <>
    
    <button> Click here!</button>
  </>);
}
function MyName(){
  const user={
    name:"rahat",
    age:32,
    address:"lahore"
  }

  return(
    <>
    <h2> My name is {user.name}and my age is {user.age} and am living in {user.address}</h2>
    
    <MyButton/>
    </>
  )
}
export default function(){
  return(
    <>
    <MyName/>
    </>
  )
}