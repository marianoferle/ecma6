const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
  },module: {
        rules: [
            { 
                test: /\.m?js$/,
                exclude: /node_modules/,            
                loader: "babel-loader"               
            }
        ]
    }
  
};