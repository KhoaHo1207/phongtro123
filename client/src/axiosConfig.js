import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, //url cua ben phia server
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //intercept.request truoc khi gui requesdt len api -> thuc hien doan code o trong truoc
    const token = localStorage.getItem("persist: auth");
    console.log(token);
    return config;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;

//khi goi api dung instance de goi
