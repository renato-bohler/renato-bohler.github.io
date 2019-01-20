module.exports = {
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "vue-loader!vue-md-loader"
    });
  }
};
