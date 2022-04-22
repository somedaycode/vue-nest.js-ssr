const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const nodeExternals = require('webpack-node-externals');

const isSSR = Boolean(process.env.SSR);
const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  outputDir: '../resources/templates',

  pages: {
    // ssr로 빌드할 땐 다른 main-ssr.js를 entry로 사용할 수 있도록 합니다.
    index: {
      entry: `src/main${isSSR ? '-ssr' : ''}.ts`,
      template: `../resources/index.html`,
      filename: isProduction
        ? `../dist/index.html`
        : 'index.html',
    },
  },

  /* SSR 빌드 */
  chainWebpack: (config) => {
    if (!isProduction) return;
    if (!isSSR) {
      return config.optimization
        .splitChunks({ name: 'manifest', minChunks: Infinity })
        .end()
        .plugin('ssr')
        .use(new VueSSRClientPlugin());
    }

    config
      .target('node')
      .optimization.delete('splitChunks')
      .end()

      .output.libraryTarget('commonjs2')
      .end()

      .externals(nodeExternals({ allowlist: /\.css|\.scss$/ }))
      .plugin('ssr')
      .use(new VueSSRServerPlugin());
  },
};
