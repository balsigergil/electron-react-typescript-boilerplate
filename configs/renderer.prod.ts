import * as path from "path";
import * as webpack from "webpack";
import { merge } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import common from "./renderer.common";

const config: webpack.Configuration = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(path.dirname(__dirname), "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});

export default config;
