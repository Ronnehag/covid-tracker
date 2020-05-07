module.exports = {
  publicPath: "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "COVID-19 Tracker";
      return args;
    });
  },
};
