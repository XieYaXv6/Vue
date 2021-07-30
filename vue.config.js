module.exports = {
  lintOnSave: false,
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/l': { // 匹配所有以 '/api'开头的请求路径,只拦截/api开头的数据
        target: 'http://172.20.10.3:8080', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          
        }
      }
    }
  }
}