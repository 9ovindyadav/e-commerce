import { server } from "../Store";

export const login = (email,password)=> async(dispatch)=>{

        dispatch({type:"loginRequest"});

        const url = `${server}/user/login`
        const response = await fetch(url,{
          method:"POST",
          headers:{
           "content-type":"application/json"
          },
          body: JSON.stringify({
            email,password
          })
        })
    
        const data = await response.json();
        if(data.message){
        dispatch({ type: "loginSuccess", payload: data});
        }
        if(data.msg){
          dispatch({ type: "loginFail", payload: data.msg});
        }
};

export const logOut = ()=> async(dispatch)=>{

  dispatch({type:"logOutRequest"});
   const  message ="Logout successfully"
  dispatch({ type: "logOutSuccess", payload: message});
};

export const register = (name,email,password)=> async(dispatch)=>{

  dispatch({type:"registerRequest"});

  const url = `${server}/user/register`
  const response = await fetch(url,{
    method:"POST",
    headers:{
     "content-type":"application/json"
    },
    body: JSON.stringify({
      email,password,name
    })
  })

  const data = await response.json();
  if(data.message){
  dispatch({ type: "registerSuccess", payload: data});
  }
  if(data.msg){
    dispatch({ type: "registerFail", payload: data.msg});
  }
};

export const forgetPassword = (email,password)=> async(dispatch)=>{

  dispatch({type:"loginRequest"});

  const url = `${server}/user/login`
  const response = await fetch(url,{
    method:"POST",
    headers:{
     "content-type":"application/json"
    },
    body: JSON.stringify({
      email,password
    })
  })

  const data = await response.json();
  if(data.message){
  dispatch({ type: "loginSuccess", payload: data});
  }
  if(data.msg){
    dispatch({ type: "loginFail", payload: data.msg});
  }
};

export const resetPassword = (email,password)=> async(dispatch)=>{

  dispatch({type:"loginRequest"});

  const url = `${server}/user/login`
  const response = await fetch(url,{
    method:"POST",
    headers:{
     "content-type":"application/json"
    },
    body: JSON.stringify({
      email,password
    })
  })

  const data = await response.json();
  if(data.message){
  dispatch({ type: "loginSuccess", payload: data});
  }
  if(data.msg){
    dispatch({ type: "loginFail", payload: data.msg});
  }
};

