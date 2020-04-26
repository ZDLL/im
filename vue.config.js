module.exports = {
    publicPath: './',
    // 输出文件目录
    outputDir: "dist",
    // webpack-dev-server 相关配置
    productionSourceMap: false,
    lintOnSave: false,
    css:{
        sourceMap:false,
        loaderOptions:{
            sass:{
                prependData:`
                @import "~@/assets/mixin.scss";
                `
            },
            postcss:{
                plugins:[
                    require("autoprefixer")(),
                    // 把px单位换算成rem单位
                    require("postcss-pxtorem")({
                        rootValue: 15,
                        // selectorBlackList: [".van", ".my-van"],// 要忽略的选择器并保留为px。
                        propList: ["*"], //可以从px更改为rem的属性。
                        minPixelValue: 0 // 设置要替换的最小像素值。
                    })
                ]
            }
                
        }
    },
    chainWebpack:config=>{
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
    },
    devServer:{
        port:8880,
        https:false,
        hotOnly:false,
        // proxy:{//代理
        //     '/im':{
        //         target:"https://gogs.5ixm.top/",
        //         ws:true,
        //         changOrigin: true,
        //         // pathRewrite: {
        //         //     '^/api': '/'
        //         // }
        //     }
        // }
    }
}