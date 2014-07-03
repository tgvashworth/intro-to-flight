# Using Mixins

- Require a mixin&hellip;

```js
var withTimeout = require('mixins/with_timeout');
```

- &hellip; and pass it to `defineComponent`.

```js
var Spinner = defineComponent(spinner, withTimeout);
function spinner() {
    // . . .
}
```

- The component can use methods defined in the mixin.

```js
var API = defineComponent(api, withXHR);
function api() {
    this.after('initialize', function () {
        this.xhr('GET', 'https://api.github.com/users/phuu')
            .then(function () {
                // . . .
            });
    });
}
```
