module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
    ],
  },
};
