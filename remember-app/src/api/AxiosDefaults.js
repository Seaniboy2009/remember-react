import axios from "axios";

axios.defaults.baseURL = 'https://app-remember-api-0c8e0548ec15.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

// Axios interceptor for requesting from the API
export const axiosReq = axios.create();
// Axios interceptor for responding to the API, refresh login token
export const axiosRes = axios.create();