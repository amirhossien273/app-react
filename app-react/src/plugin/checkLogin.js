import Cookies from 'js-cookie';
//import { useNavigate   } from "react-router-dom";
// const history = useNavigate ();
export function checkLogin(){
    //const history = useNavigate ();
    if(!Cookies.get("token")){
      //  history("/login");
       return true; 
    }

    return false;
}