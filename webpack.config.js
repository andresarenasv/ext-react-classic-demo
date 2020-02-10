const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const portFinder = require('portfinder');

module.exports = function (env) {
  function get(it, val) {if (env === undefined) {return val} else if (env[it] === undefined) {return val} else {return env[it]}}
  const environment   = get('environment',   'development');
  const isProd = environment === 'production';
  const toolkit = 'classic';
  const rules = [
    { test: /\.ext-reactrc$/, use: 'raw-loader' },
    { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
    { test: /\.(html)$/,use: { loader: 'html-loader' } },
    {
      test: /\.(css|scss)$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' }
      ]
    }
  ];
  portFinder.basePort = (env && env.port) || 1962;

  return portFinder.getPortPromise()
  .then(port => {
    const plugins = [
      new HtmlWebpackPlugin({ template: 'index.html', hash: true, inject: 'body' }),
      new ExtWebpackPlugin({
        framework: 'react',
        toolkit: toolkit,
        theme: `theme-triton`,
        packages: [],
        script: '',
        emit: 'yes',
        port: port,
        profile: '',
        environment: environment,
        treeshake: isProd ? 'yes' : 'no',
        browser: isProd ? 'no' : 'yes',
        watch: isProd ? 'no' : 'yes',
        verbose: 'no',
      })
    ];

    return {
      mode: environment,
      devtool: (environment === 'development') ? 'inline-source-map' : false,
      context: path.join(__dirname, './src'),
      entry: './index.js',
      output: {
        path: path.join(__dirname, 'build'),
        filename: "[name].js"
      },
      plugins: plugins,
      module: {
        rules: rules
      },
      resolve: {
        // The following is only needed when running this boilerplate within the ext-react repo.  You can remove this from your own projects.
        alias: {
          "react": path.resolve('./node_modules/react'),
        }
      },
      performance: { hints: false },
      stats: 'none',
      optimization: { noEmitOnErrors: true },
      node: false,
      devServer: {
        contentBase: 'build',
        hot: !isProd,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: port,
        disableHostCheck: false,
        compress: isProd,
        inline: !isProd,
        stats: 'errors-warnings',
        proxy: {
        }
      }
    };
  });
};
