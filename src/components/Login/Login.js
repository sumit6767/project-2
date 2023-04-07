import React, { useEffect, useState,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action)=>{
  if(action.type==="email"){
    return {...state,email:action.val,emailIsValid:action.val.includes("@")}
  }
  if(action.type==="emailValidity"){
    return {...state,emailIsValid:state.email.includes("@")}
  }
  if(action.type==="password"){
    return {...state,password:action.val,passwordIsValid:action.val.trim().length > 6}
  }
  if(action.type==="passwordValidity"){
    return {...state,passwordIsValid:state.password.trim().length > 6}
  }
  if(action.type==="college"){
    return {...state,college:action.val,collegeIsvalid:action.val.length>3};
  }
  if(action.type==="collegeValidity"){
    return {...state,collegeIsvalid:state.college.length>3}
  }
  return {...state}
}

const Login = (props) => {
  const [emailState,dispatchFunction] = useReducer(emailReducer,{email:"",emailIsValid:null,password:"",passwordIsValid:null,college:"",collegeIsvalid:null});
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{

    const timer = setTimeout(()=>setFormIsValid(
      emailState.emailIsValid && emailState.passwordIsValid && emailState.collegeIsvalid //
    ),500)

    return ()=>{
      clearTimeout(timer)
    }
  },[emailState])

  const emailChangeHandler = (event) => {
    dispatchFunction({type:"email",val:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchFunction({type:"password",val:event.target.value});
  };
  const validateCollegeHandler = ()=>{
     dispatchFunction({type:'collegeValidity'});
  }
  const validateEmailHandler = () => {
    dispatchFunction({type:"emailValidity"})
  };
  const collegeChangeHandler = (event)=>{
    dispatchFunction({type:"college",val:event.target.value})
  }
  const validatePasswordHandler = () => {
    dispatchFunction({type:"passwordValidity"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.email, emailState.password,emailState.college);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={emailState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.collegeIsvalid === false ? `${classes.naya}`: ''
          }`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={emailState.college}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
