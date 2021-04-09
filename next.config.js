const withLess = require('@zeit/next-less');
const withPlugins = require("next-compose-plugins");
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withPlugins(
    [
        withLess({
            lessLoaderOptions: {
                javascriptEnabled: true,
            }
        })
    ],
    {

        webpack: (config, { dev, isServer }) => {

            if (isServer) {
                return config;
            }

            var isProduction = config.mode === 'production';
            if (!isProduction) {
                return config;
            }
            config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 1,
                })
            );

            config.optimization.minimizer.push(
                new OptimizeCSSAssetsPlugin({})
            );

            return config
        }
    }
);