import axios from 'axios'

let service = axios.create({})
// service.defaults.baseURL = 'http://openapi.moerlong.com:8081'//如果配置了baseURL 那么会在请求的url最前面默认加上代表的内容 比如/api 代表http://127.0.0.1:3000, 请求中axios.get('/test') === axios.get('http://127.0.0.1:3000/test')
service.defaults.timeout = 60*1000;
// service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//设置公共的token
service.interceptors.request.use(
    config => {
      config.headers.token = '12313213'
      console.log('config:', config)
      //判断token是否生效
      return config
    },
    error => {
      console.log(error) // for debug
      Promise.reject(error)
    }
)
 //响应拦截器即异常处理
service.interceptors.response.use(response => {
    console.log('拦截器里面请求成功：', response)
    return response
    }, err => {
    //错误拦截
    console.log('请求失败:', err.response.status)
    err.response.message = "连接到服务器失败"
    console.log('err:', err.response)
    return Promise.resolve(err.response)
})

export const request =  (url, params, methods) => {
    let method = methods.toLocaleUpperCase()
    if (method == 'GET') {
        return new Promise((resolve, reject) => {
            service.get(url, {params:params})
                .then(res=>{
                    console.log('封装里面的get请求结果：', res)
                    resolve(res)
                })
                .catch(err=>{
                    console.log('err:', err)
                    reject(err)
                })
        })
    } else if (method == 'POST') {
        return new Promise((resolve, reject) => {
            service.post(url, params)
                .then(res=>{
                    console.log('封装里面的post请求结果：', res)
                    resolve(res)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    } else {
        // service.headers = {
        //     'Content-Type': 'multipart/form-data'
        // }
        return new Promise((resolve, reject) => {
            service.post(url, params)
                .then(res=>{
                    console.log('封装里面的update请求结果：', res)
                    resolve(res)
                })
                .catch(err=>{
                    reject(err)
                })
        })
    }
}