module.exports = {
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器(方式一)
  devServer: {
    proxy: 'http://localhost:5005'
  }
  // 开启多个服务器代理(方式二)
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://localhost:5005',
  //         pathRewrite: { '/api': '' } // 路径重写,在服务器请求那里把/api变为空
  //         // ws: true, //用于支持websocket
  //         // changeOrigin: true //用于控制请求头中的host值
  //       }
  //       // '/carApi': {
  //       //   target: 'http://localhost:5001',
  //       //   pathRewrite: { '/carApi': '' } // 路径重写,在服务器请求那里把/api变为空
  //       //   // ws: true, //用于支持websocket
  //       //   // changeOrigin: true //用于控制请求头中的host值
  //       // }
  //     }
  //   }
}
