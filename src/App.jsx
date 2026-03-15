function AdminPanel(){
  return(
    <>
    <h1>AdminPanel</h1></>
  );
}
function LoginForm(){
  return(
    <>
    <h1>LoginForm </h1></>
  );
}
export default function App(){
 
  let content;
  let LoggedIn= true;
 
  if(LoggedIn=true){
  content=<AdminPanel/>
  }
  else{
    content=<LoggedIn/>
  }
  return(<>
    {content}
  </>)
}