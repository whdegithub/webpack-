//引入path
const path = require('path');
module.exports={
    //入口
    //多入口
    entry:{
        //前面的参数名，随便定义，后面的URL路径
        entry:'./src/entry.js',
        entry2:'./src/entry2.js'
    },
    //出口
    output:{
        //多出口中，path唯一的
        //filename ：中的[name]是打包的文件和入口文件名保持一致
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //配置
    module:{},
    //插件，可以有多个插件
    plugins:[],
    //webpack开发服务
    devServer:{}
}