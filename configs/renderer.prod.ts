import * as path from "path";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import common from "./renderer.common";

const config: Configuration = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(path.dirname(__dirname), "dist"),
    filename: "[name].bundle.js",
  },
});

export default config;
