import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": "error",
      ...prettierConfig.rules
    }
  },
  {
    rules: {
      "no-console": ["warn"],
      "react/react-in-jsx-scope": "off", // for React 17+
      "react/prop-types": "error"
    }
  },
  {
    files: ["tailwind.config.js", "*.config.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Node.js specific globals
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",
        exports: "readonly",
        global: "readonly",
      },
    },
    rules: {
      // Node-specific rules here, if any
    },
  }
];
