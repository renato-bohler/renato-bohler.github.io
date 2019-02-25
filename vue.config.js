const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  configureWebpack: config => {
    // Markdown loader
    config.module.rules.push({
      test: /\.md$/,
      loader: "vue-loader!vue-md-loader"
    });
    // MomentJS locale loader
    config.plugins.push(
      new MomentLocalesPlugin({
        localesToKeep: ["pt-br"]
      })
    );
  }
};
