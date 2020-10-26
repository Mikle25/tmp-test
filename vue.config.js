module.exports = {
  lintOnSave: false,
  publicPath: '/tmp-test/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";',
      },
    },
  },
};
