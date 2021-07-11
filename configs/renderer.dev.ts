import { merge } from "webpack-merge";
import { spawn } from "child_process";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import common from "./renderer.common";
import WebpackDevServer from "webpack-dev-server";

declare module "webpack" {
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}

const config = merge(common, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 3000,
    hot: true,
    noInfo: false,
    stats: "errors-only",
    before() {
      spawn("yarn", ["run", "electron"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code ?? 1))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});

export default config;
