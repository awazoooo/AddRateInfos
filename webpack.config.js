var path = require('path');

module.exports = {
    entry: './src/addRateInfos.org.ts',

    output: {
        filename: 'addRateInfos.js',
        path    : path.resolve(__dirname, '')
    },

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
        ],
    },
}
