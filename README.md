# eslint-plugin-sentence-case-exclude

[![npm version](https://badge.fury.io/js/eslint-plugin-sentence-case-exclude.svg)](https://badge.fury.io/js/eslint-plugin-sentence-case-exclude)

Enforce that string literals are in sentence case, allowing for exclusions.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sentence-case-exclude`:

```sh
npm install eslint-plugin-sentence-case-exclude --save-dev
```

## Usage

Add `sentence-case-exclude` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sentence-case-exclude"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sentence-case-exclude/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                         | Description                                                                |
| :------------------------------------------- | :------------------------------------------------------------------------- |
| [sentence-case](docs/rules/sentence-case.md) | Enforce that string literals are in sentence case, allowing for exclusions |

<!-- end auto-generated rules list -->
