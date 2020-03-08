/* Error: Undefined variable.
 *    ,
 * 17 |       font-family: map-get($map: $color, $key: $color-primary);
 *    |                                                ^^^^^^^^^^^^^^
 *    '
 *   layout\_header.scss 17:48   @import
 *   layout\_alllayout.scss 3:9  @import
 *   style.scss 2:9              root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: Undefined variable.\a    \2577 \a 17 \2502        font-family: map-get($map: $color, $key: $color-primary);\d\a    \2502                                                 ^^^^^^^^^^^^^^\a    \2575 \a   layout\\_header.scss 17:48   @import\a   layout\\_alllayout.scss 3:9  @import\a   style.scss 2:9              root stylesheet";
}
