// webpack.config.mjs
import path from "path";
import fs from "fs";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import WebpackShellPluginNext from "webpack-shell-plugin-next";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { CMS_BLOCK_ID } from "./app/utils/key.js";

// Unga bunga file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Is dev? Mammoth small or big
const isDev = process.env.NODE_ENV === "development";

// Output cave
const outputDir = path.resolve(__dirname, "build");
const bundleFilename = "prod.js";
const txtFilename = "prod.txt";

// --------------------------
// Unga bunga plugin chew CSS blobs
// --------------------------
class InlineCssPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("InlineCssPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "InlineCssPlugin",
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          // Find all CSS mammoths
          const cssChunks = Object.keys(assets).filter((n) => n.endsWith(".css"));
          if (!cssChunks.length) return; // No mammoths? Nothing to chew

          // Chew all CSS into one string
          const css = cssChunks.map((n) => assets[n].source()).join("\n");

          // Injector magic: throw mammoth into head
          const injector = `
(function(){
  if(document.querySelector('style[data-inline-bundle]'))return; // only one mammoth
  var s=document.createElement('style');
  s.setAttribute('data-inline-bundle','true');
  s.textContent=${JSON.stringify(css)};
  document.head.appendChild(s);
})();\n`;

          // Find main JS mammoth
          const jsName = Object.keys(assets).find((n) => n.endsWith(".js"));

          // Prepend CSS mammoth to JS mammoth
          assets[jsName] = new webpack.sources.RawSource(injector + assets[jsName].source());

          // Delete CSS mammoths from cave
          cssChunks.forEach((n) => delete assets[n]);
        }
      );
    });
  }
}

export default {
  mode: isDev ? "development" : "production",

  // --------------------------
  // Entry mammoths: JS + multiple CSS
  // --------------------------
  entry: {
    main: "./app/index.js", // big mammoth JS
    styles: [
      "./app/styles/mobile.css",  // small mammoth
      "./app/styles/styles.css", // medium mammoth
    ],
  },

  output: {
    path: outputDir,     // cave
    filename: bundleFilename, // main JS mammoth name
    clean: true,         // remove old bones
  },

  resolve: {
    extensions: [".js", ".mjs", ".json"], // mammoth teeth types
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        type: "asset/resource",  // CSS mammoths become real files
        generator: { filename: "[name].css" }, // keep mammoth names
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // sniff HTML mammoth
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto", // tell JS mammoth to behave
      },
    ],
  },

  plugins: [
    // Define env mammoth
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }),

    // Chew CSS mammoths only in prod cave
    !isDev && new InlineCssPlugin(),

    // Wrap final bundle into CMS paste mammoth
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          () => {
            const bundlePath = path.join(outputDir, bundleFilename);
            const code = fs.readFileSync(bundlePath, "utf8");

            // Wrap mammoth in script tag
            const wrapped = `<script id="${CMS_BLOCK_ID}">\n${code}\n</script>`;
            fs.writeFileSync(path.join(outputDir, txtFilename), wrapped, "utf8");
          },
        ],
        blocking: true,
        parallel: false,
      },
    }),
  ].filter(Boolean),

  optimization: {
    minimize: !isDev, // Tiny mammoth in prod
    minimizer: [
      new TerserPlugin({
        terserOptions: { format: { comments: false, ascii_only: false } },
        extractComments: false,
      }),
    ],
  },
};
