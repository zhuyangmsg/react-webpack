var HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path: path.join(__dirname, "./build/")
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },{
            test:/\.js$/,
            use:['react-hot-loader','babel-loader'], // 位置不能变
            exclude:/node_modules/
        },{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },{
            test: /\.(gif|jpg|png)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
      })
    ]
}