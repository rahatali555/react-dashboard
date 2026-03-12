function MyButton(){
  return(
    <>

    <button> Click here</button>
    </>
  )
}
const User={
  name:"rahat",
  age:32,
  Address:"lahore"
};

export default function App(){
  return(
    <>
    <h1>
      {User.name},{User.age},{User.Address}
    </h1>
    <MyButton/>
    </>
  )

}