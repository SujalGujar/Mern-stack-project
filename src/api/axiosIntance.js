import axios from "axios"

const axiosIntance = axios.create({
    baseURL:"http://localhost:3000/api",
    timeout:10000,
})

axiosIntance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("authToken");
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error)=>{
        Promise.reject(error)
        console.log(error)
    }
)

axiosIntance.interceptors.response.use(
    (response)=>response,
    (error) =>{
        if(error.response && error.response.status === 401){
            console.log("Unauthorized user")
        }
        return Promise.reject(error)
    }
)


export default axiosIntance;
