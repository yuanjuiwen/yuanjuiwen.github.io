import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Pages keep the original <img>/<picture> markup so the layout stays identical.
      "@next/next/no-img-element": "off",
      // Internal links are plain <a> on purpose: the original page-fade transition
      // and intro logic rely on full page loads.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Original vanilla JS, ported verbatim (see the note at the top of each file).
    "src/legacy/**",
  ]),
]);

export default eslintConfig;
