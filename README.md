# \<dile-button\>

Polymer Web Component to implement a simple animated button

This components accepts a "role" property to styling.
Also a boolean property called "disabled" to disable the button.

Clicks on the button produces a CSS animation, when the button disabled property is false.

```html
<dile-button
  role="primary"
  disabled
></dile-button>
```

Custom property | Description | Default
----------------|-------------|---------
--dile-button-padding | Padding applied to the buttton box | 10px
--dile-button-box | Mixind applied to the button box | {}