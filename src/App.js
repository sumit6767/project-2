import React, { useState ,useEffect} from 'react';
import Auth from './Context/auth';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedInformation = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(+loggedInformation)
  },[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn",1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };

  return (
    <Auth.Provider value={{isLoggedIn:isLoggedIn}}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Auth.Provider>
  );
}

export default App;
