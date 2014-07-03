# Events

![](/content/tweet-box.png)

```js
function tweetButton() {
    this.onClick = function () {
        this.trigger('send');
        this.$node.attr('disabled', 'disabled');
    };
}

function composeBox() {
    this.after('initialize', function () {
        this.on('send', this.send);
    });

    this.send = function () {
        this.trigger('sendTweet', {
            text: this.select('composeText').text()
        });
    };
}
```
