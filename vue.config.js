//var webpack=require('webpack')
module.exports = {
  lintOnSave: false,

  devServer: {
    // open:true,
    // // Paths
    // // assetsSubDirectory: 'static',
    // // assetsPublicPath: '/',
    // proxyTable: {
    //   '/l': { // 匹配所有以 '/api'开头的请求路径,只拦截/api开头的数据
    //     target: 'http://172.20.10.3:8080', // 代理目标的基础路径
    //     changeOrigin: true, // 支持跨域
    //     // pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          
    //     // }
    //   }
    // },
    open: true,
		// disableHostCheck: false,
		host: "localhost",
		port: 8081,
		https: false,
		// hotOnly: false,
		
		// 静态资源文件夹
		// assetsSubDirectory: 'static',
		
		// 发布路径
		// assetsPublicPath: '/',		这里有错
		
		// 代理配置表，在这里可以配置特定的请求代理到对应的API接口
		// 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
		// 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
		proxy: {
			'/': {
				target: 'http://localhost:8080', // 接口的域名
				// secure: false,  // 如果是https接口，需要配置这个参数
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
				// pathRewrite: {
				// 	'^/l': ''
				// }		
			}
		},
  }

}
