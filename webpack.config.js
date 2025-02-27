const { resolve } = require('path');

const config = {
  mode: 'development',
  module: {
    rules: [
      {        
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        exclude: resolve('../node_modules'),
        options: {
          limit: 10000
        }
      },
      {        
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        exclude: resolve('../node_modules'),
        options: {
          limit: 100000
        }
      }
    ],
  },
  devServer: {
    open: true, // 设置是否自动打开浏览器
    hot: true,
    proxy: {
      '/': {
        target: 'https://dev.tanmarket.cn/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^': ''
        }
      }
    }
  },
  externals: {
    'Vue': 'Vue',
    'element-ui': 'ElementUI'
  }
}

// module.exports = config;
module.exports = (env, argv) => {
  config.mode = env.mode;
  if (config.mode === 'development') {
    console.log(argv, '--development--', env);
  }

  if (config.mode === 'production') {
    console.log(argv, '==production==', env);
  }

  console.log("🚀 ~ config:", config)
  return config;
};
