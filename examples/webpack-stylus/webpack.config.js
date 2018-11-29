const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/, use: 'css-loader'
        }, {
            test: /\.(styl)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'stylus-loader' // compiles Stylus to CSS
            }]
        }]
    }
};