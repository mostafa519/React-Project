

import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://fakestoreapi.com',
    // headers:'',
    // params:{
    //     limit:5
    // },
})

export default axiosInstance ; 
