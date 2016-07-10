module.exports = {
  entry: "./app/app.js",
  output: {
    path: "./",
    filename: "bundle.js"
  }
};


module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "assets/js/bundle.js",
        sourceMapFilename: "assets/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    resolve: {
      extensions: ["", ".js", ".jsx"]
    }
}
