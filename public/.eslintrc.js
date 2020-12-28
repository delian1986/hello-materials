module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    },
    "parser": "@babel/eslint-parser",
    "settings": {
        "react": {
            "version": "latest"
        }
    },
    "globals": {
        "__dirname":true,
        "require":true,
        "module":true
    }
};
