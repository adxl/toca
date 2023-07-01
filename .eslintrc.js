module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.12.0",
    },
    "import/resolver": {
      webpack: {
        config: "webpack.config.dev.js",
      },
    },
  },
  plugins: ["simple-import-sort", "require-explicit-generics"],
  rules: {
    "require-explicit-generics/require-explicit-generics": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
      },
    ],
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_$",
        varsIgnorePattern: "^_$",
        caughtErrorsIgnorePattern: "^_$",
      },
    ],
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^@?\\w"],
              ["^@(.*|$)"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$"],
              ["^\\u0000"],
            ],
          },
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "error",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "require-explicit-generics/require-explicit-generics": [
          "error",
          ["useState", "React.useState", "useRef", "React.useRef", "FC", "React.FC"],
        ],
      },
    },
  ],
};
