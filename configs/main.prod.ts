import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
  mode: "production",
  entry: path.join(path.dirname(__dirname), "src", "main.ts"),
  target: "electron-main",
  output: {
    path: path.resolve(path.dirname(__dirname), "dist"),
    filename: "electron.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};

export default config;
