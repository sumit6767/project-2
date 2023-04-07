import React from 'react';
import Auth from '../../Context/auth';
import classes from './Navigation.module.css';

const Navigation = () => {
  return(
  <Auth.Consumer>
    {
    (context)=>{
      console.log(context)
      return(
        <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
      )
    }
  }
  </Auth.Consumer>
  )
};

export default Navigation;
