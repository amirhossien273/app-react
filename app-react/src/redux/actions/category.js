
import API from "../../api";

export const GET_ALL_CATEGORY            = 'GET_ALL_CATEGORY';
export const ADD_DATA_TO_CREATE_CATEGORY = 'ADD_DATA_TO_CREATE_CATEGORY';
export const CREATE_ALL_CATEGORY         = 'CREATE_ALL_CATEGORY';

export function getCategory() {
   
    return  ( dispatch ) => {
         API.getCategory()
        .then((response) => {dispatch(getCategorySuccess(response));})
        .catch((error) => {dispatch(getCategoryError(error))})
    }
    
};

export function getCategorySuccess(response) {
    return {
        type: GET_ALL_CATEGORY,
        data: response
    };
};

export function createCategorySuccess(response) {
    return {
        type: CREATE_ALL_CATEGORY,
        data: response
    };
};

export function uploadFileAction(formData) {
    return  ( dispatch ) => {
        API.UploadFileApi(formData)
        .then((response) => {dispatch(editeValueCategory("file",response.url));})
    }
};

export function createCategory(payload) {
    return  ( dispatch ) => {
        API.createCategory(payload)
        .then((response) => {dispatch(createCategorySuccess(response));})
    }
};

export function editeValueCategory(key, name) {
    console.log(name);
    return {
        type: ADD_DATA_TO_CREATE_CATEGORY,
        key: key,
        name: name
    };
};

export function getCategoryError(error) {console.log(error)}