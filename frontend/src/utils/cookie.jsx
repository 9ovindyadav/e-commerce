import {Cookies} from "react-cookie";

export const setCookie = (name,value) => {
    const cookies = new Cookies();

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+1);

    cookies.set(name,value,{path: "/",expires: expireDate});
}