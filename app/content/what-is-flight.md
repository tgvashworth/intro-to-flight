# What is Flight?

> Flight is a lightweight, component-based JavaScript framework that maps behavior to DOM nodes.

-  A way to create reusable **Components**&hellip;
```js
return defineComponent(TweetButton);
function TweetButton() {
    // ...
}
```
- &hellip; that can be *attached* to DOM nodes.
```js
TweetButton.attachTo('.tweet-button', {
    text: 'Tweet'
});
```
