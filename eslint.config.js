// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    {
        plugins: {
            "react-native": reactNativePlugin // Теперь передаем объект плагина, а не строку
        },
        ignores: ["dist/*"],
        rules: {
            indent: ["off"],
            "comma-dangle": ["error", "never"],
            "prettier/prettier": [
                "error",
                {
                    useTabs: false,
                    tabWidth: 4,
                    semi: true,
                    trailingComma: "none",
                    bracketSpacing: true,
                    printWidth: 120,
                    endOfLine: "auto",
                    commaDangle: ["error", "never"]
                }
            ],
            "react-native/no-unused-styles": ["warn"],
            "react-native/split-platform-components": 2,
            "react-native/no-single-element-style-arrays": 2
        }
    }
]);
