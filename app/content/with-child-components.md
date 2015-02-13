# `withChildComponents`

- Nest components
- Automatically manage component lifecycles
- Parent-child relationship
    - Child component’s lifecycle is bound to its parent’s
    - Can be repeated to for a tree
- Uses events for communication

![](https://g.twimg.com/blog/blog/image/flightteardown.png)

```js
this.after('initialize', function () {
    this.attachChild(TweetButton, { ... });
});
```
