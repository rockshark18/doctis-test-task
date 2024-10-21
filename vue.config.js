const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/variables.scss" as *;` // NOTE: make vars global (previously deprecated @import was replaces by @use)
      }
    }
  }
})
