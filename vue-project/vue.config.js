const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy:{
      'api':{
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{    //路径重写
          "^/api":''
        }
      }
    }
  }
})
