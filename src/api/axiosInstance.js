import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8787/v1',    // 设置基础 URL
    timeout: 10000, // 设置超时时间
    headers: {
        'Content-Type': 'application/json'
    }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        // 在请求发送之前做些什么
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // 对响应错误做些什么
        switch (error.response.status) {
            case 401:
                // 401 错误处理
                console.error("Unauthorized");
                break;
            case 404:
                // 404 错误处理
                console.error("Not Found");
                break;
            case 500:
                // 500 错误处理
                console.error("Internal Server Error");
                break;
            default:
                // 其他错误处理
                console.error(error.response.data);
                break;
        }
        return Promise.reject(error);
    }
)

export default axiosInstance