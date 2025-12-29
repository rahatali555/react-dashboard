
//avatar component
function Avatar (){return ( <img src="https://via.placeholder.com/100"
  alt="Avatar" 
  style={{borderRadius:`50px`, width:`100px`, height:`100px`}}
/>
);
}
function UserInfo() {
  return ( <div>
    <h1> Ali Haider </h1>
    <h2> fRONT eND dEVELOPER</h2>
    </div>
  );
}
function ProfileCard() {
  return (
    <div style={{textAlign:`center`, border:`1px solid #ccc`, padding:`20px`, margin:`20px`}}>
      <Avatar />
      <UserInfo/>
    </div>
  );
}
export default function App (){
  return(
    <div>
      <h2> My App</h2>
      <ProfileCard/>
    </div>
  )
}