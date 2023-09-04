const path = require("path");

// cf. https://github.com/webpack/webpack/issues/12506#issuecomment-1360810560
class RemoveLicenseFilePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("RemoveLicenseFilePlugin", (compilation) => {
      // compliation has assets to output
      // console.log(compilation.assets);
      for (let name in compilation.assets) {
        if (name.endsWith("LICENSE.txt")) {
          delete compilation.assets[name];
        }
      }
    });
  }
}

/** @type {import('webpack').Configuration} */
const config = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  plugins: [new RemoveLicenseFilePlugin()],
};

module.exports = [config];
