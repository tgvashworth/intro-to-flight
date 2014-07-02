# What is Flight?

- A way to extend Component functionality with Mixins&hellip;
```js
return defineComponent(Tweet, withTweetActions, withTimestamp);
```
- &hellip; and communicate using events.
```js
// Tweet
this.on(document, 'dataSendTweet', function (event, data) {
    // . . .
});
```
```js
// TweetButton
this.trigger('dataSendTweet', {
    text: 'I <3 Flight'
});
```
- Good at fitting around existing code
- Lightweight. ~5k light.
