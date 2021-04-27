const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(TTF)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  entry: './src/index.jsx',
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
      <html>
        <head>
          <title>Calculadora</title>
          <meta charset="UTF-8">
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    `,
    favicon: './src/calculator-flat.png',
  })],
}
