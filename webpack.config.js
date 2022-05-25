import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'

import { isDev, isProd } from './tasks/_utils'

export default {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'inline-source-map' : false,
  cache: isDev,
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/scripts'),
      '@cmps': path.resolve(__dirname, 'src/components'),
      '@partials': path.resolve(__dirname, 'src/partials'),
      '@db': path.resolve(__dirname, 'firebase/options.json')
    }
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          }
        }
      })
    ]
  }
}
