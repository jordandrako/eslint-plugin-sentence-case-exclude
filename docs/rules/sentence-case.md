# Enforce that string literals are in sentence case, allowing for exclusions (`sentence-case-exclude/sentence-case`)

<!-- end auto-generated rule header -->

## Rule Details

Examples of **incorrect** code for this rule:

```js

'A String in Title Case'

```

Examples of **correct** code for this rule:

```js

'A string in sentence case'
'lowercase-string'

```

## Options

This rule allows exclusions to be configured, so if you have a commonly occurring proper noun,
for example, you don't have to turn off the rule for each occurrence.

The `exclude` property accepts an array of strings that will be ignored when checking for sentence casing.

Examples of **correct** code when `exclude` is configured:

```js
"Some Proper Noun"
```

Example configuration for `exclude`:

```js
{
  rules: {
    "sentence-case-exclude/sentence-case": ["error", {
      exclude: ["Some Proper Noun"]
    }]
  }
}
```
