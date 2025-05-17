export default {
	"no-console":           process.env.NODE_ENV === "production" ? "error" : "warn",
	"one-var":              [ "error", "never" ],
	"no-lonely-if":         "error",
	"max-depth":            [ "error", 4 ],
	"func-names":           [ "warn", "as-needed" ],
	"capitalized-comments": [ "error", "always", { ignoreConsecutiveComments: true } ],
	"sort-imports":         [ "error", { ignoreCase: true },
	],
};