module.exports = {
  title: 'matcha-ui',
  description: 'vue ui',
  base: '/matcha-ui/',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      },
    ]
  }
}