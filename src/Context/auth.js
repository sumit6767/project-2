import React from "react";
import { useState,useEffect } from "react";
const Auth = React.createContext({isLoggedIn:false,onLogin:()=>{},onLogout:()=>{}})


export const AuthProvider = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const loggedInformation = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInformation)
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
    return(
        <Auth.Provider value={{isLoggedIn:isLoggedIn,onLogin:loginHandler,onLogout:logoutHandler}}>
            {props.children}
        </Auth.Provider>
    )
} 
export default Auth;