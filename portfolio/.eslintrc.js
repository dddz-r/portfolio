module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // "prettier/prettier": [
        //   "error",
        //   {
        //     "singleQuote": true,
        //     "semi": true,
        //     "tabWidth": 2,
        //     "trailingComma": "none",
        //     "printWidth": 140,
        //     "bracketSpacing": true,
        //     "arrowParens": "avoid",
        //     "endOfLine": "auto" // CRLF 오류 방지
        //   }
        // ],
        "no-unused-vars": "off",
        "no-import-assign": "off",
        "no-redeclare": "off",
        "no-undef": "off",
        "no-inner-declarations": "off",
        "no-case-declarations": "off", // case절에서의 정의 금지
        "no-prototype-builtins": "off",
        "no-useless-escape": "off",
        "vue/no-reserved-keys": "off", // 추후에 confilct나는 등의 경우에는 뺄 것
        "no-debugger": "off"
      },
};
