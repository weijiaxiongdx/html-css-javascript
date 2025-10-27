// 预设环境中包括很多插件，如语法降级插件、编译插件等
// 就是postcssPresetEnv中包括很多插件，它会一次性把相关必要插件都安装好
// 有了这些插件后，postcss就可以对未来的高级语法进行降级处理、同时还可以编译less、scss等语法
const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
    plugins: [
        postcssPresetEnv(/* pluginOptions */)
    ]
}
