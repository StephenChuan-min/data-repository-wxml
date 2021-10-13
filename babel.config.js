module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true
    }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui",
        "libraryDirectory": "dist/packages/_es",
        "camel2DashComponentName": false
      },
      'nutui3-vue'
    ],
    [
      "import",
      {
        "libraryName": "@nutui/nutui-taro",
        "libraryDirectory": "dist/packages/_es",
        "camel2DashComponentName": false
      },
      'nutui3-taro'
    ]
  ]
}
