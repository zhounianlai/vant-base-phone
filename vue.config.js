/*!
 * @author atongmu <zhounianlai@teacher.com.cn>
 * date 11/07/2019
 * description The vue's config.
 */

const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
}

const BASE_URL = "/";

module.exports = {
  publicPath: BASE_URL,
  // options...
  devServer: {
    hot:true,
    open: true,
    port: 8088,
    proxy: "http://stu.teacher.com.cn"
  },
  outputDir: "../dist",
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@@", resolve("src/components"))
  },
  productionSourceMap: false
}