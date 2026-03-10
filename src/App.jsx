function AdminPanel(){
  return(
    <>
    <h2> Admin Panel</h2>
    </>
  );

}
function UserPanel(){
return(
  <>
  <h2> User Panel</h2>

</>
);
}
function App(){
  let  IsloggedIn=false;
  let content;
  if(IsloggedIn==true){
    content=<AdminPanel/>
  } 
  else{
    content=<UserPanel/>
  }
  return(
    <>
    {content}
    </>
  );
}
export default App;