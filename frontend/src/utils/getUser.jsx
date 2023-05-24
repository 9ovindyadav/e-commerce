import { Cookies } from "react-cookie"

export const getUser = async () => {
const cookies = new Cookies();

const token = cookies.get("token");

const url = `${import.meta.env.VITE_BACKEND_URL}/user`;

const response = await fetch(url,{
    headers:{
       "Authorization": `Bearer ${token}`
    }
})

const data = await response.json();
localStorage.setItem("user",JSON.stringify(data.user));
}