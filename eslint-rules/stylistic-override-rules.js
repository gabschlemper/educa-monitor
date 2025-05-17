export default {
	"@stylistic/quotes":            [ "error", "double", { avoidEscape: true } ],
	"@stylistic/indent":            [ "error", 2 ],
	"@stylistic/semi":              [ "error", "always", { omitLastInOneLineBlock: false } ],
	"@stylistic/indent-binary-ops": [ "error", "tab" ],
	"@stylistic/brace-style":       [ "error", "allman", { allowSingleLine: true } ],
	"@stylistic/eol-last":          "off",
	"@stylistic/key-spacing":       [ "error",
		{
			singleLine: {
				beforeColon: false,
				afterColon:  true,
			},
			multiLine: {
				beforeColon: false,
				afterColon:  true,
				align:       "value",
			},
		},
	],
	"@stylistic/operator-linebreak":          [ "error", "after" ],
	"@stylistic/no-trailing-spaces":          [ "error", { skipBlankLines: true, ignoreComments: true } ],
	"@stylistic/no-mixed-spaces-and-tabs":    [ "error", "smart-tabs" ],
	"@stylistic/no-tabs":                     [ "error", { allowIndentationTabs: true } ],
	"@stylistic/array-bracket-spacing":       [ "error", "always" ],
	"@stylistic/space-before-function-paren": [ "error", "never" ],
	"@stylistic/semi-style":                  [ "error", "last" ],
};