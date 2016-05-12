module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel" },
            { test: /\.css$/, loader: "style!css" },
        ]
    },
    devServer: {
        port: 8081,
        inline: true,
    },
};