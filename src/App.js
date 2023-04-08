import React, { useContext} from 'react';
import Auth from './Context/auth';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const authcontext = useContext(Auth)
  return (
    <>
      <MainHeader />
      <main>
        {!authcontext.isLoggedIn && <Login onLogin={authcontext.onLogin} />}
        {authcontext.isLoggedIn && <Home onLogout={authcontext.onLogout} />}
      </main>
    </>
  );
}

export default App;
