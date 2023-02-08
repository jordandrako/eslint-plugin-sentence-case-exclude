/**
 * @fileoverview Enforce that string literals are in sentence case, allowing for exclusions.
 * @author Jordan Janzen
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function checkString(str, node, context) {
  const lowerToUpperCount =
    (str.match(/\p{Ll}\s\p{Lu}/ug) || []).length;
  const anyToLowerCount =
    (str.match(/\p{LC}\s\p{Ll}/ug) || []).length;
  if (lowerToUpperCount > anyToLowerCount) {
    context.report(node, 'String literals should not use title case');
  }
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce that string literals are in sentence case, allowing for exclusions",
      recommended: false
    },
    schema: [
      {
        type: "object",
        properties: {
          exclude: {
            type: "array"
          }
        },
        additionalProperties: false
      }
    ]
  },

  create: function (context) {
    const options = context.options[0] || {};
    const exclusions = options.exclude || [];
    return {
      Literal: (node) => {
        if (typeof node.value === 'string') {
          if (exclusions.length === 0 || exclusions.indexOf(node.value) === -1) {
            checkString(node.value, node, context);
          }
        }
      },
      JSXText: (node) => {
        if (exclusions.length === 0 || exclusions.indexOf(node.value) === -1) {
          checkString(node.value, node, context);
        }
      }
    };
  }
};
