// MyButton component (reusable!)
function MyButton() {
  return (
    <button
      style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      Follow
    </button>
  );
}

// Avatar component
function Avatar() {
  return (
    <img
      src="https://via.placeholder.com/100"
      alt="Profile"
      style={{ borderRadius: '50%', width: '100px', height: '100px' }}
    />
  );
}

// UserInfo component — BUT wait! We need two different ones...
// So for now (without props), we'll make two versions:

function UserInfoAli() {
  return (
    <div>
      <h2>Ali Haider</h2>
      <p>Goat farmer & app builder 🌾📱</p>
      <MyButton />
    </div>
  );
}

function UserInfoFatima() {
  return (
    <div>
      <h2>Fatima Khan</h2>
      <p>Dairy & crop expert 🥛🌱</p>
      <MyButton />
    </div>
  );
}

// ProfileCard for Ali
function ProfileCardAli() {
  return (
    <div
      style={{
        textAlign: 'center',
        border: '2px solid #4CAF50',
        borderRadius: '12px',
        padding: '20px',
        margin: '15px',
        backgroundColor: '#f9f9f9',
        maxWidth: '250px',
        display: 'inline-block'
      }}
    >
      <Avatar />
      <UserInfoAli />
    </div>
  );
}

// ProfileCard for Fatima
function ProfileCardFatima() {
  return (
    <div
      style={{
        textAlign: 'center',
        border: '2px solid #2196F3',
        borderRadius: '12px',
        padding: '20px',
        margin: '15px',
        backgroundColor: '#f0f8ff',
        maxWidth: '250px',
        display: 'inline-block'
      }}
    >
      <Avatar />
      <UserInfoFatima />
    </div>
  );
}

// Main App
export default function App() {
  return (
    <div style={{ textAlign: 'center', padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🌾 Farmer Connect</h1>
      <p>Meet our farming community:</p>

      {/* Display both profile cards side by side */}
      <ProfileCardAli />
      <ProfileCardFatima />
    </div>
  );
}
