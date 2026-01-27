// webpack.config.mjs
import { CMS_BLOCK_ID } from "./app/utils/key.js";
import path from "path";
import fs from "fs";
import WebpackShellPluginNext from "webpack-shell-plugin-next";
import { fileURLToPath } from "url";
import { dirname } from "path";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = path.resolve(__dirname, "build");
const bundleFilename = "prod.js";
const txtFilename = "prod.txt";

const isDev = process.env.NODE_ENV === "development";

export default {
  mode: isDev ? "development" : "production",
  entry: "./app/index.js",
  output: {
    path: outputDir,
    filename: bundleFilename,
  },
  resolve: {
    extensions: [".js", ".mjs", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: "asset/source",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            const bundlePath = path.join(outputDir, bundleFilename);
            let code = fs.readFileSync(bundlePath, "utf8");

            const wrapped = `<script id="${CMS_BLOCK_ID}">\n${code}\n</script>`;
            fs.writeFileSync(
              path.join(outputDir, txtFilename),
              wrapped,
              "utf8"
            );
            console.log(
              `Generated ${txtFilename} with <script id="${CMS_BLOCK_ID}">...`
            );
          },
        ],
        blocking: true,
        parallel: false,
      },
    }),
  ],
};
