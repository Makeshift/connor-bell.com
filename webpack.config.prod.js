const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'production',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
        buildDependencies: {
            // This makes all dependencies of this file - build dependencies
            config: [__filename]
        },
        cacheDirectory: '/webpack_cache'
    },
});
