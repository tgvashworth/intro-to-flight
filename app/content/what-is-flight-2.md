# What is Flight?

- A way to extend Component functionality with Mixins&hellip;

```js
var Tweet = defineComponent(tweet, withTweetActions, withTimestamp);
```
- &hellip; and communicate using events.

```js
function API() {
    this.on('sendTweet', function (event, data) {
        // . . .
    });
}
function TweetButton() {
    this.trigger('sendTweet', {
        text: 'I <3 Flight'
    });
}
```

- Good at fitting around existing code.
    - Doesn't take over your page
- Lightweight.
    - ~5k light.
    - *Tiny* API.
