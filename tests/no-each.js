'use strict';

const rule = require('../rules/no-each')
const RuleTester = require('eslint').RuleTester

const error = '$.each is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-each', rule, {
  valid: [
    'each()',
    '[].each()',
    'div.each()',
  ],
  invalid: [
    {
      code: '$.each()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").each()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.each()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().each()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").each())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
