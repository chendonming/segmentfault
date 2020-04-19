module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://192.168.199.206:9091',
        changeOrigin: true,
      },
    },
  },
};
