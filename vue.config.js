module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:9091', // 192.168.199.206
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
};
