# \<dile-button\>

Web Component to implement a simple animated button, based on LitElement

This components accepts a "role" property to styling. Accepted values are: undefined, primary, danger, warning, success

Implements a boolean property called "disabled" to disable the button.

Clicks on the button produces a CSS animation, but only when the button disabled property is false.

```html
<dile-button
  role="primary"
  disabled
></dile-button>
```

Custom property | Description | Default
----------------|-------------|---------
--dile-button-padding | Padding applied to the buttton box | 10px
--dile-button-border-width | Border applied to the button box | 0
--dile-button-boder-color | Border color applied to the button box | transparent