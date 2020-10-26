module.exports = {
  lintOnSave: false,
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/styles.scss";',
      },
    },
  },
};
