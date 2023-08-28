import axios from "axios";

// Main
axios.defaults.baseURL = 'https://app-remember-api-0c8e0548ec15.herokuapp.com';
// Test
// axios.defaults.baseURL = 'https://8000-seaniboy200-rememberapi-aahgjtzy025.ws-eu104.gitpod.io';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

// Axios interceptor for requesting from the API
export const axiosReq = axios.create();
// Axios interceptor for responding to the API, refresh login token
export const axiosRes = axios.create();