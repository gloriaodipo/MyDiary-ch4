const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    signup: "./src/signup.js",
    login: "./src/login.js",
    addentry: "./src/addentry.js",
    getEntries: "./src/getEntries.js",
    singleEntry: "./src/singleEntry.js",
    logout: "./src/logout.js"
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "stage-2"]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};
