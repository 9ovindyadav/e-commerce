import { server } from "../Store";

export const createProduct = (myForm)=> async(dispatch)=>{
console.log(myForm);
    dispatch({type:"createProductRequest"});

    const url = `${server}/product/create`
    const response = await fetch(url,{
      method:"POST",
      headers:{
       "content-type":"application/json"
      },
      body: JSON.stringify(myForm)
    })

    const data = await response.json();
    if(data.message){
    dispatch({ type: "createProductSuccess", payload: data});
    }
    if(data.msg){
      dispatch({ type: "createProductFail", payload: data.msg});
    }
};