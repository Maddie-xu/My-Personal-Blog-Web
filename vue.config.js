module.exports = {
  // 选项...
  publicPath: './',
  devServer: {
    open: true,
    host: 'localhost',
    port: '8080',
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 要请求的地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
