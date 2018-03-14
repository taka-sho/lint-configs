module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'block-closing-brace-newline-before': 'always',
    'no-descending-specificity': null,
    'value-list-comma-newline-after': null, // use prettier format
    'declaration-colon-newline-after': null, // use prettier format
    'unit-whitelist': ['px', '%', 'deg', 'ms', 'vh', 'vw'],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin', 'at-root', 'include']
      }
    ]
  }
}
