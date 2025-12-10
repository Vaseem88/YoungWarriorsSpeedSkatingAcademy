// Remove the require line for defineConfig entirely
// const { defineConfig } = require('@vue/cli-service') <--- DELETE THIS

module.exports = {
  transpileDependencies: true,
  
  // Set your publicPath here
  publicPath: './',
}

/*
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/YoungWarriorsSpeedSkatingAcademy/'
    : '/'
   } 
*/
