# Component lifecycle

- Components have a lifecycle:
    - Attach
    - Initialize
    - ...
    - Teardown
- They can hook in to this lifecycle using **advice**:

```js
function TweetButton() {
    this.after('initialize', function () {
        this.on('click', this.handleClick);
    });
    this.before('teardown', function () {
        this.$node.attr('disabled', true);
    });
}
```
