/**
 * 合理使用混合器。
 * 混合器函数前面统一加mx与后期的其他公共函数分开
 */
import moment from 'moment'
import md5 from 'js-md5' 
const mixin = {//vue 生命周期的钩子函数都可以写在这里面
    methods: {    
        mxTimeChange(string){//时间转换成 年-月-日 时：分：秒
            if(!string){
                console.log("未传入可转换的时间")
                return
            }
            return moment(string).format("YYYY-MM-DD HH:mm:ss")
        },
        mxEncrypt(string){//加密暂时用md5方式，后期具体需要在讨论
            if(!string){
                console.log("请传入加密字符串")
                return
            }
            return md5(string)
        },
        mxToFiox2(string){//保留2位小数
            return string.toFixed(2)
        },
        mxSetStore(name, content){//存储localStorage
            if (!name) return;
            if (typeof content !== 'string') {
              content = JSON.stringify(content);
            }
            window.localStorage.setItem(name, content);
        },
        mxGetStore(name){//获取localStorage
            if (!name) return;
            return window.localStorage.getItem(name);
        },
        mxEmoveStore(name){//删除删除localStorage
            if (!name) return;
            window.localStorage.removeItem(name);
        }
    }
  }
  export default mixin