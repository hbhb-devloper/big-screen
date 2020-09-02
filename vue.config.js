const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `http://hellopop.51vip.biz/`,
      //   // target: `http://121.41.89.146:8080`,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: ''
      //   }
      // },
      "/api": {
        target: 'http://hellopop.51vip.biz',
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }
    },
    disableHostCheck: true
  },
}