module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['mocha', 'sinon-chai'],
      client: {
        chai: {
          includeStack: true
        }
      },
      // 运行单元测试打包后的脚本
      files: [
        'dist/**/*.test.js',
        'dist/**/*.test.css'
      ],
      exclude: [],
      preprocessors: {},
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      // 用chrome浏览器环境
      browsers: ['ChromeHeadless'],
      singleRun: false,
      concurrency: Infinity
    })
  }
  