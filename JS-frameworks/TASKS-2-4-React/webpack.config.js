module.exports = {
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        port: 1234,
        host: '0.0.0.0'
    }
}