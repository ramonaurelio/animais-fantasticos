const path = require("path");

module.exports = {
  entry: "./js/scripts.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
  modele: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
