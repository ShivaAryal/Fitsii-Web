const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const lessToJs = require('less-vars-to-js');
const path = require('path');
const fs = require('fs');

const themeVariables = lessToJs(
  fs.readFileSync(path.resolve(__dirname, './assets/less/antd-custom.less'), 'utf8')
);

//fix error when the less files are required by node, ie: server
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { };
}

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    return config;
  }
};

module.exports = withPlugins(
  [
    // add a plugin with specific configuration
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables
        }
      }
    ],
    withImages
  ],
  nextConfig
);
