var hwp=require('html-webpack-plugin');
const path = require('path');
const fs  = require('fs');

// const lessToJs = require('less-vars-to-js');

var rootTemplate=new hwp({
    template:'./src/index.html'
})

var webpackObj={
    entry: './src/index',
    'plugins':[rootTemplate],
    'module':{
        'rules':[
             {
                test: /\.(js|jsx)$/,     
                 loader:'babel-loader',
                 exclude:/node_modules/,
                 options: {
                    plugins: [
                      ['import', { libraryName: "antd", style: true }]
                    ]
                  },

             },
             {
                 test:/\.css$/,
                 loader:['style-loader','css-loader']
             } ,
             {
                       test: /\.(png|svg|jpg|gif)$/,
                       use: [
                       'file-loader',
                       ],
                     },
             {
                test: /\.less$/,
                use: [
                  {loader: "style-loader"},
                  {loader: "css-loader"},
                  {loader: "less-loader",
                    options: {
                      javascriptEnabled: true

                    }
                  }
        ]
    },

]
}
}

module.exports=webpackObj;
