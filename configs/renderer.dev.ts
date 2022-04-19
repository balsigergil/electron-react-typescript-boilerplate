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
  output: {
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    setupMiddlewares: (middlewares, _) => {
      console.log("Starting Main Process...");
      spawn("yarn", ["run", "electron"], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code ?? 1))
        .on("error", (spawnError) => console.error(spawnError));
      return middlewares;
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});

export default config;
