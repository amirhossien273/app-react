import axios from "axios";
import Cookies from 'js-cookie';

const url_local = "http://127.0.0.1:8000/api/";

const Api = {

    loginUser: function(payload) {
        console.log(payload);
        return (
            axios.post( url_local + 'auth/login', payload)
            .then(function(response) {
                Cookies.set("token", response.data.authorisation.token, {
                    expires: 7,
                  });
                return response.data;
            })
        );
    },

    getCategory: function() {
        return (
            axios.get(
            url_local + "categories/list")
            .then(function(response) {
                return response.data;
            })
        );
    },
    createCategory: function(payload) {
        return (
            axios.post( url_local + 'categories/create', payload, {headers: {'Authorization': 'Bearer ' + Cookies.get("token")},})
            .then(function(response) {
                console.log(response.data);
                return response.data;
            })
        );
    },
    UploadFileApi: function(formData) {
        return (
            axios.post( url_local + 'upload-file', formData)
            .then(function(response) {
                console.log(response.data);
                return response.data;
            })
        );
    }
}

export default Api;