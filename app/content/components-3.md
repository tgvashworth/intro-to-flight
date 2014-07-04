# Component attributes

- Components can define attributes:

```js
function tweetButton() {
    this.attributes({
        text: 'Tweet'
    });
    this.after('initialize', function () {
        this.$node.text(this.attr.text);
    });
}
```

- They can be overwritten when the Component is attached:

```js
TweetButton.attachTo('.tweet-button', {
    text: 'Schedule Tweet'
});
```

- Attributes with a default value of `null` *must* be set when the Component is attached.
- There's another API for this, `defaultAttrs`, that is deprecated. Included because you'll see it around.
