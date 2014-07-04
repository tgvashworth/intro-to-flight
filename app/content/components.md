# Components

- Listens to events
- Emits events
- Interacts with the DOM

![](/content/component.png)

- Components are just functions with access to the Flight API.<br/>Here's an example in AMD style:

```js
define(function (require) {
    var defineComponent = require('flight/lib/component');
    return defineComponent(tweetButton);
    function tweetButton() {
        this.after('initialize', function () {
            this.on('click', this.handleClick);
        });
        this.handleClick = function (event) {
            this.trigger('sendTweet');
        };
    }
});
```
