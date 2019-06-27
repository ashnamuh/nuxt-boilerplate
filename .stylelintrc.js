module.exports = {
  'plugins': [
    'stylelint-order'
  ],
  'processors': ['@mapbox/stylelint-processor-arbitrary-tags'],
  'extends': 'stylelint-config-recommended-scss',
  'rules': {
    'function-url-quotes': 'never',
    'no-empty-source': null,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-space-before': 'always',
    'indentation': 2,
    'order/properties-order': [
      'display',
      'overflow',
      'float',
      'position',
      'z-index',
      'width',
      'height',
      'margin',
      'padding',
      'border',
      'font',
      'background'
    ]
  }
}
