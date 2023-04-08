import React from "react";
import classes from './Login.module.css'
const Input = (props)=>{
    return(
        <>
        <div
          className={`${classes.control} ${
            props.emailState.emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={props.emailState.email}
            onChange={props.emailChangeHandler}
            onBlur={props.validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            props.emailState.passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={props.emailState.password}
            onChange={props.passwordChangeHandler}
            onBlur={props.validatePasswordHandler}
          />
        </div>
        </>
    )
}

export default Input;