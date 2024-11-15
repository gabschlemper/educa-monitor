import BaseRules from "./eslint-rules/base-rules.js";
import JavascriptOverrideRules from "./eslint-rules/nuxt-javascript-override-rules.js";
import stylistic from "@stylistic/eslint-plugin";
import StylisticOverrideRules from "./eslint-rules/stylistic-override-rules.js";
import StylisticRules from "./eslint-rules/stylistic-rules.js";
import TypescriptOverrideRules from "./eslint-rules/typescript-override-rules.js";
import VueOverrideRules from "./eslint-rules/nuxt-vue-override-rules.js";
import VueRules from "./eslint-rules/vue-rules.js";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	{
		name:    "stylistic-recommended-config",
		plugins: stylistic.configs["recommended-flat"].plugins,
		rules:   stylistic.configs["recommended-flat"].rules,
	},
	{
		name:  "base-rules",
		rules: { ...BaseRules },
	},
	{
		name:  "base-vue-rules",
		rules: { ...VueRules },
	},
	{
		name:  "base-stylistc-rules",
		rules: { ...StylisticRules },
	},
)
	.override("nuxt/typescript/rules", { rules: { ...TypescriptOverrideRules } })
	.override("nuxt/javascript", { rules: { ...JavascriptOverrideRules } })
	.override("nuxt/vue/rules", { rules: { ...VueOverrideRules } })
	.override("stylistic-recommended-config", { rules: { ...StylisticOverrideRules } });