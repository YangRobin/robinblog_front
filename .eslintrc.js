// {
//   "parserOptions": {
//     "ecmaVersion": 6, // 指定想要支持的javascript版本,这里6表示es6
//     "sourceType": "module", // 默认为"script",代码是ECMAScript准则，则设置为"module"
//     "ecmaFeatures": {
//       "jsx": true // 启用JSX
//     }
//   },
//   // 指定脚本的运行环境，支持定义多个
//   "env": {
//     "es6": true,
//     "node": true,
//     "browser": true
//   },
//   // 使用第三方airbnb
//   "extends": ["airbnb","eslint:all", "plugin:react/all"],
//   // airbnb包括以下三个插件，插件名称可以省略eslint-plugin-前缀
//   "plugins": [
//     "react",
//     // "jsx-a11y",
//     "import"
//   ],
//   "parser": "babel-eslint",
//   // 定义自己的规则
//   "rules": {
//       // "jsx-a11y/rule-name": 2
//     // "comma-dangle": [
//     //   "error",
//     //   "never"
//     // ], //禁止末尾逗号
//     // "jsx-a11y/href-no-hash": [
//     //   "error",
//     //   {
//     //     "components": [
//     //       "a"
//     //     ]
//     //   }
//     // ],
//     // "linebreak-style": 0
//   }
// }

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    page: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [1, "always", { "ignoreClassFields": false }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js'],
      },
    ],
    'import/no-cycle': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.less'] } },
    polyfills: ['fetch', 'promises', 'url', 'object-assign'],
  },
};
