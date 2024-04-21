//引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports ={
    mode: 'development',
    // 指定入口文件
    entry: "./src/index.ts",
   //指定打包文件坐在目
    output: {
        path: path.resolve(__dirname,'dist'),
        // 打包后文件的文件
        filename: "bundle.js",
        //告诉Webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    // 指定webpack打包时要使用模块
    module: {
        //指定要加载的规则
        rules: [
            {
                // test制定规则生效的文件
                test: /\.ts$/,//表示匹配所有以ts结尾的文件
                // 要使用的loader
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs方法s
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    },
    //配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "自定义标题",
            template: "./src/index.html",
        }),
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    }
};