const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // CORRECT: publicPath is at the root level
  // Use './' (relative) or '' (empty string) to fix the blank page issue
  publicPath: './', 
  
  // INCORRECT: Do not use "output" here
  // output: { ... } 
})

/*
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/YoungWarriorsSpeedSkatingAcademy/'
    : '/'
   } 
*/
