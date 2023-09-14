// src/index.js
const plugin = require('tailwindcss/plugin')
const Button = require('./components/buttons')
const components = require('../dist/components')
const utilities = require('../dist/utilities')

const TailwindUiKitPlugin = plugin(function ({ addUtilities, addComponents }) {
  addUtilities(utilities)
  addComponents(components)
})

module.exports = [TailwindUiKitPlugin, Button]
