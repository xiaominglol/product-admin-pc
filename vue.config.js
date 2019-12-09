// vue.config.js
module.exports = {
  devServer: {
    port: 8888,
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
