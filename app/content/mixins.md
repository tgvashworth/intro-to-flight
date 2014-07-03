# Mixins

- Mixins add functionality to a component.
- Also just functions.
- Hook into the components lifecycle using advice.
- Define attributes and methods

```js
define(function () {
    return withTimeout;
    function withTimeout() {
        this.attributes({
            timeout: null
        });
        this.after('initialize', function () {
            this.timeout = setTimeout(function () {
                this.teardown();
            }.bind(this), this.attr.timeout)
        });
        this.cancelTimeout = function () {
            clearTimeout(this.timeout);
        };
    }
});
```
