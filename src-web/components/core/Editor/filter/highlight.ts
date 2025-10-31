import { styleTags, tags as t } from '@lezer/highlight';

export const highlight = styleTags({
  // Boolean operators
  And: t.operatorKeyword,
  Or: t.operatorKeyword,
  Not: t.operatorKeyword,

  // Structural punctuation
  LParen: t.paren,
  RParen: t.paren,
  Colon: t.punctuation,
  Minus: t.operator,

  // Literals
  Phrase: t.string, // "quoted string"
  Term: t.variableName, // bare terms like foo, bar

  // Fields
  'FieldName/Word': t.tagName,

  // Grouping
  Group: t.paren,
});
