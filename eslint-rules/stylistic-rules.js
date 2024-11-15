export default {
	"@stylistic/max-len": [ "error", {
		code:          120,
		tabWidth:      2,
		ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
	} ],
	"@stylistic/func-call-spacing":            [ "error", "never" ],
	"@stylistic/linebreak-style":              [ "error", "unix" ],
	"@stylistic/no-confusing-arrow":           [ "error", { allowParens: true, onlyOneSimpleParam: false } ],
	"@stylistic/one-var-declaration-per-line": [ "error", "always" ],
	"@stylistic/newline-per-chained-call":     [ "error", { ignoreChainWithDepth: 4 } ],
	"@stylistic/implicit-arrow-linebreak":     [ "error", "beside" ],
	"@stylistic/function-paren-newline":       [ "error", "consistent" ],
};