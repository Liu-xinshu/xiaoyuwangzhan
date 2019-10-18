import axios from 'axios';

const newAxios = axios.create();

newAxios.interceptors.request.use(function(config) {
    console.log(config)
    return {
        ...config,
        headers: {
            ...config.headers,
            'Authorization': `Bearer ${window.localStorage.token}`
        }
    }
}, function(error) {
    return Promise.reject(error);
})




newAxios.interceptors.response.use(function(response) {
    console.log(response, '响应');
    return response;
}, function(error) {
    return Promise.reject(error);
})



export default newAxios;