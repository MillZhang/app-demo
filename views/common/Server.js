import axios from 'axios'
import {Alert} from 'react-native';

// 创建axios实例
const Server = axios.create({
    baseURL: 'https://api.douban.com/v2/', // api的base_url
    timeout: 10000 // 请求超时时间
})

// request拦截器
Server
    .interceptors
    .request
    .use(config => {
        return config;
    }, error => {
        Alert.alert(error.toString());
        Promise.reject(error)
    })

// respone拦截器
Server
    .interceptors
    .response
    .use(response => {
        if (response.status == 200) {
            let result = response.data;
            return result;
        }
        return response
    }, error => {
        Alert.alert('提示',error.toString())
        return Promise.reject(error)
    })

export default Server
