module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "prettier",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        // project: "**/tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: ["react"],
    rules: {
        "@typescript-eslint/restrict-template-expressions": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-misused-promises": "off",
    },
};
