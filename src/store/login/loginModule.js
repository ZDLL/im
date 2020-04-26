import apiUrl from './api.js'
import * as types from './type.js';
import {request} from '@/untill/request.js'
const state={
    [types.POST_LOGIN]:{}
}

const getters={

}
const actions ={//异步
    async [types.POST_LOGIN](cxt,postData){
        cxt.commit(types.POST_LOGIN,await request(apiUrl.login,postData,'post'))
    }
}
const mutations ={//同步
    [types.POST_LOGIN](state,data){
        state[types.POST_LOGIN]= data.data
    }
}

export default {
    namespaced: true,//解决不同模块命名冲突的问题,需要加上所属的模块名
    state,
    getters,
    actions,
    mutations
}