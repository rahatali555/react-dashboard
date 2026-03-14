function AdminPanel(){
  return(
    <h1>AdminPanel</h1>
  );
}
function LoginForm()
{
  return(
    <h1> LoginForm</h1>
  );
}
export default function App(){
  const isloggedIn=true;
let Content;
if (isloggedIn){
  Content=<AdminPanel/>;
}
 else{
  Content=<LoginForm/>;
  
}
return(
  <>
  {Content}
  </>
);
} 