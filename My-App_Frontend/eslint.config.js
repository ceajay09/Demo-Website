// eslint.config.js
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  // Ignorieren (statt .eslintignore)
  {
    ignores: ["dist/**", "build/**", "node_modules/**", "coverage/**"],
  },

  // Basis JS Regeln
  js.configs.recommended,

  // Dein Code (React)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // rausnehmen, wenn reines Frontend
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React 17+ JSX Transform: React muss nicht in Scope sein
      "react/react-in-jsx-scope": "off",

      // React Hooks Regeln (wichtig)
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Kleine sinnvolle Defaults
      "react/prop-types": "off", // wenn du TS nutzt, bleibt es off

      // Import hygiene
      "import/no-unresolved": "off", // Bundler/TS loest das meist besser
      "import/order": ["warn", { "newlines-between": "always" }],
    },
  },
];