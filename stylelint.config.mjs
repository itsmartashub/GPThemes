/** @type {import("stylelint").Config} */
export default {
	// extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
	extends: ['stylelint-config-standard-scss'],
	rules: {
		// CSS - stylelint-config-standard
		'keyframes-name-pattern': null,
		'no-invalid-double-slash-comments': null, // dramaQ
		'alpha-value-notation': 'number', // falsepositive
		'selector-class-pattern': null, // useless for this extension
		'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
		'custom-property-pattern': null, // if want flexible --var naming
		'custom-property-empty-line-before': null, // dramaQ
		'comment-empty-line-before': null, // falsepositive
		'no-descending-specificity': null, // useless for this extension
		'selector-id-pattern': null, // useless for this extension
		'container-name-pattern': null, // falsepositive
		'rule-empty-line-before': null, // dramaQ
		'at-rule-empty-line-before': null, // dramaQ
		'declaration-empty-line-before': null, // dramaQ
		'selector-pseudo-element-colon-notation': null,
		'hue-degree-notation': null, // falsepositive
		'lightness-notation': null, // falsepositive
		'at-rule-no-vendor-prefix': null, // falsepositive
		'comment-whitespace-inside': null, // dramaQ
		'color-function-alias-notation': null, // falsepositive
		'color-function-notation': null, // dramaQ
		'length-zero-no-unit': null, // dramaQ
		'no-duplicate-selectors': null, // falsepositive
		'shorthand-property-no-redundant-values': null, // dramaQ

		// SCSS - stylelint-config-standard-scss
		'scss/double-slash-comment-empty-line-before': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'scss/dollar-variable-pattern': null,
		'scss/percent-placeholder-pattern': null,
		'scss/no-global-function-names': null, // if using color.adjust() with CSS vars
		'scss/load-no-partial-leading-underscore': null, // useless for this extension
		'scss/at-mixin-pattern': null, // dramaQ
		'scss/at-extend-no-missing-placeholder': null, // dramaQ
		'scss/at-if-no-null': null, // dramaQ
	},
}
