import API from "../../api";

export const SET_FORMVALUES_USERS   = 'SET_FORMVALUES_USERS';

export function login(data) {
   
    return  ( dispatch ) => {
         API.loginUser(data)
       .then((response) => {dispatch(editeValue(response));})
       .catch((error) => {dispatch(getCategoryError(error))})
    }
    
};

export function editeValue(key, name) {
    return {
        type: SET_FORMVALUES_USERS,
        key: key,
        name: name
    };
};

export function getCategoryError(error) {console.log(error)}