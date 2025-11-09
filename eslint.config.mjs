import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";
import perfectionist from "eslint-plugin-perfectionist";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import { fixupPluginRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/node_modules",
    "**/out",
    "**/playwright-report",
    "**/.next",
    "**/test-results",
]), {
    extends: [
        ...next,
        ...nextCoreWebVitals,
        ...compat.extends("plugin:react/jsx-runtime"),
        ...compat.extends("plugin:@typescript-eslint/recommended"),
        ...compat.extends("plugin:prettier/recommended"),
        ...compat.extends("plugin:perfectionist/recommended-natural")
    ],

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "@stylistic/js": stylisticJs,
        perfectionist,
        import: fixupPluginRules(_import),
        "unused-imports": unusedImports,
        "prefer-arrow-functions": preferArrowFunctions,
    },

    rules: {
        "object-shorthand": "error",
        "arrow-body-style": ["error", "as-needed"],
        "prefer-arrow-functions/prefer-arrow-functions": "error",
        curly: ["error", "multi-or-nest", "consistent"],

        "unused-imports/no-unused-vars": ["error", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "@stylistic/js/spaced-comment": ["error", "always"],
        "capitalized-comments": "error",
        "multiline-comment-style": ["error", "starred-block"],
        "no-warning-comments": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-function": "off",
        "react/self-closing-comp": "error",
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-no-useless-fragment": "error",
        "@next/next/no-img-element": "off",
        "unused-imports/no-unused-imports": "error",
        "import/first": "error",
        "import/no-duplicates": "error",
        "import/newline-after-import": "error",
        "import/no-default-export": "error",
        "import/consistent-type-specifier-style": ["error", "prefer-inline"],

        "@typescript-eslint/consistent-type-imports": ["error", {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
        }],

        "no-restricted-imports": ["error", {
            paths: [{
                name: "react",
                importNames: ["default"],
            }],
        }],

        "perfectionist/sort-imports": ["error", {
            type: "natural",
            order: "asc",
            "newlines-between": "always",

            groups: [
                "side-effect",
                "builtin",
                "react",
                "next",
                ["external", "external-type"],
                ["internal", "internal-type"],
                ["parent", "parent-type"],
                ["sibling", "sibling-type"],
                "style",
                "unknown",
            ],

            "custom-groups": {
                value: {
                    react: ["react", "react-dom"],
                    next: ["next", "next/*"],
                },
            },
        }],

        "perfectionist/sort-named-imports": ["error", {
            order: "asc",
            type: "natural",
            "group-kind": "values-first",
        }],

        "perfectionist/sort-named-exports": ["error", {
            order: "asc",
            type: "natural",
            "group-kind": "values-first",
        }],
    },
}, {
    files: ["./pages/**/*.tsx", "**/**.config.[jt]s"],

    rules: {
        "import/no-default-export": "off",
    },
}, {
    files: ["**/*.d.ts"],

    rules: {
        "spaced-comment": "off",
        "multiline-comment-style": "off",
        "capitalized-comments": "off",
    },
}, {
    files: ["**/e2e/?(*.)+(test).[jt]s?(x)"],
    extends: [...compat.extends("plugin:playwright/recommended")],
}]);