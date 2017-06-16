module.exports = {
  entry: "./index",
  output: {
   path: __dirname + "/dist",
   filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.wasm$/,
        loaders: ['wasm-loader']
      }
    ]    
  }
};
