import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

// Necesario para obtener __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production', // Cambia a 'development' si estás en desarrollo production
  entry: './index.js', // Cambia esto según tu archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFormat: 'module', // Asegura que los chunks se generen como ESM
    libraryTarget: 'module'
  },
  experiments: {
    outputModule: true
  },
  target: 'node', // Asegura que el entorno objetivo sea Node.js
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    })
  ]
};
