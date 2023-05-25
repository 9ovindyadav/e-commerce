import {Cookies} from "react-cookie";

export const setCookie = (name,value) => {
    const cookies = new Cookies();

    if(name === "remove"){
        cookies.set("token",value,{path: "/"});
    }

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+1);

    cookies.set(name,`Bearer ${value}`,{path: "/",expires: expireDate});
}

export const getCookie = () => {
    const cookies = new Cookies();

    return cookies.getAll().token ;
}